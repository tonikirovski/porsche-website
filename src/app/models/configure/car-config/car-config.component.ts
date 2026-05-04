import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';
import carreraConfig from '../../../shared/911/carrera-config.json';
import cabrioConfig from '../../../shared/911/cabrio-config.json';
import gt3Config from '../../../shared/911/gt3-config.json';
import gt3rsConfig from '../../../shared/911/gt3rs-config.json';
import { ActivatedRoute } from '@angular/router';
import caymanConfig from '../../../shared/718/cayman-config.json';
import spyderConfig from '../../../shared/718/spyder-config.json';
import taycanConfig from '../../../shared/taycan/taycan-config.json';
import taycanstConfig from '../../../shared/taycan/taycanst-config.json';
import panameraConfig from '../../../shared/panamera/panamera-config.json';
import turbohybridConfig from '../../../shared/panamera/turbohybrid-config.json';
import macanConfig from '../../../shared/macan/macan-config.json';
import melectricConfig from '../../../shared/macan/m-electric-config.json';
import cayenneConfig from '../../../shared/cayenne/cayenne-conifg.json';
import cayenneCoupeConfig from '../../../shared/cayenne/coupe-config.json';




const VARIANT_JSON_MAP: Record<string, any> = {
  'carrera': carreraConfig,
  'cabriolet': cabrioConfig,
  'gt3': gt3Config,
  'gt3rs': gt3rsConfig,
  'cayman': caymanConfig,
  'spyder': spyderConfig,
  'taycan': taycanConfig,
  'taycanst': taycanstConfig,
  'panamera': panameraConfig,
  'turbohybrid': turbohybridConfig,
  'macan': macanConfig,
  'melectric': melectricConfig,
  'cayenne': cayenneConfig,
  'coupe': cayenneCoupeConfig,

  // future variants:
  // 'gt3': gt3Config,
  // 'cabriolet': cabrioletConfig
};
@Component({
  selector: 'app-car-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-config.component.html',
  styleUrls: ['./car-config.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden', padding: '0px', margin: '0px' })),
      state('expanded', style({ height: '*', opacity: 1, overflow: 'visible', padding: '*', margin: '*' })),
      transition('collapsed <=> expanded', [animate('300ms ease')])
    ]),
    trigger('modalSlide', [
      state('void', style({ transform: 'translate(-50%, 100vh)', opacity: 0 })),
      state('*', style({ transform: 'translate(-50%, -50%)', opacity: 1 })),
      transition('void => *', animate('300ms ease-out')),
      transition('* => void', animate('200ms ease-in', style({ transform: 'translate(-50%, 100vh)', opacity: 0 })))
    ]),
    trigger('pricePop', [
      state('normal', style({ transform: 'scale(1)', opacity: 1 })),
      state('popped', style({ transform: 'scale(1.15)', opacity: 1 })),
      transition('normal => popped', [animate('0.2s ease-out')]),
      transition('popped => normal', [animate('0.3s ease-in')])
    ])
  ]
})
export class CarConfigComponent implements OnInit, AfterViewInit {
 @Input() variantJson: any;

 
 

  // --- IMAGE SLIDER ---
  dragStartX = 0;
  dragOffset = 0;
  isDragging = false;
  hasMoved = false;
  containerWidth = 1;

  defaultImages: string[] = [];
  images: string[] = [];
  selectedImage!: string;

  get currentIndex(): number { return this.images.indexOf(this.selectedImage); }
  get prevImage(): string { return this.images[(this.currentIndex - 1 + this.images.length) % this.images.length]; }
  get nextImage(): string { return this.images[(this.currentIndex + 1) % this.images.length]; }
  get dragOffsetPercent(): number { return this.containerWidth ? (this.dragOffset / this.containerWidth) * 100 : 0; }

  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.hasMoved = false;
    this.dragStartX = this.getX(event);
    const container = (event.target as HTMLElement).closest('.main-image') as HTMLElement;
    this.containerWidth = container?.offsetWidth ?? 1;
  }

  onDragging(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    if (event.cancelable) event.preventDefault();
    const currentX = this.getX(event);
    this.dragOffset = currentX - this.dragStartX;
    if (Math.abs(this.dragOffset) > 10) this.hasMoved = true;
  }

  onDragEnd(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    // Use 20% of the container width as the threshold for a natural "swipe" feel
    const dragThreshold = this.containerWidth * 0.2; 
    const currentIndex = this.currentIndex;
    let newIndex = currentIndex;

    if (Math.abs(this.dragOffset) > dragThreshold) {
      if (this.dragOffset > 0) {
        newIndex = (currentIndex - 1 + this.images.length) % this.images.length;
      } else {
        newIndex = (currentIndex + 1) % this.images.length;
      }
    }

    this.isDragging = false;
    this.dragOffset = 0;
    this.selectedImage = this.images[newIndex];
    this.hasMoved = false;
  }

  getX(event: MouseEvent | TouchEvent): number { return event instanceof MouseEvent ? event.clientX : (event as TouchEvent).touches[0].clientX; }
  getSlideTransform(relativePosition: -1 | 0 | 1): string {
    const dragOffsetPercent = (this.dragOffset / this.containerWidth) * 100;
    const baseOffset = relativePosition * 100;
    return `translateX(${baseOffset + dragOffsetPercent}%)`;
  }
  getSlideTransition(): string { return this.isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'; }
  preventDrag(event: DragEvent) { event.preventDefault(); }
  selectImage(img: string) { this.selectedImage = img; }

  // --- SELECTIONS ---
  selectedColor: any;
  selectedWheel: any;
  selectedInterior: any;
  selectedSeat: any;
  selectedTechnology = new Set<string>();
  selectedAccessories = new Set<string>();

  selectedColorName!: string;
  selectedWheelName!: string;
  selectedInteriorName!: string;
  selectedSeatName!: string;

  sectionStates: { [key: string]: boolean } = {
    exteriorColors: true,
    wheels: true,
    interior: true,
    seats: true,
    technology: true,
    accessories: true
  };

  combinedImageMap: any = {};
  interiorSeatImageMap: any = {};
  totalPrice: number = 0;
  displayedPrice: number = 0;
  pricePopState = 'normal';
  lastSelectedOptions: { [section: string]: any } = {};

  // Cabrio roof
  roofState: 'roofClosed' | 'roofOpen' = 'roofClosed';
  isCabriolet: boolean = false;

  // --- MODALS & QUOTE ---
  @ViewChild('modalContent') modalContent!: ElementRef;
  @ViewChild('quoteModalContent') quoteModalContent!: ElementRef;
  showTechModal = false;
  activeTech: any = null;

  showQuoteModal = false;
  sending = false;
  quoteForm = { name: '', surname: '', mobile: '', email: '', city: '' };

  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit() {

  if (this.variantJson) return; // already passed as @Input()

  this.route.paramMap.subscribe(params => {
    const rawSlug = params.get('variant')?.toLowerCase() || '';
    const variantName = rawSlug.replace(/-/g, ''); // remove dashes

    

    // Load JSON configuration
    const jsonData = VARIANT_JSON_MAP[variantName];
    if (!jsonData) {
      console.error(`No JSON found for variant '${variantName}'`);
      this.router.navigateByUrl('/models');
      return;
    }

    this.variantJson = jsonData;

    // Detect cabrio
    this.isCabriolet = ['cabriolet', 'spyder'].includes(variantName);
    this.roofState = this.isCabriolet ? 'roofClosed' : undefined as any;

    // Initialize maps, defaults, images
    this.combinedImageMap = jsonData.combinedImageMap;
    this.interiorSeatImageMap = jsonData.interiorSeatImageMap;
    this.totalPrice = jsonData.basePrice;
    this.displayedPrice = this.totalPrice;

    const defaultColor = jsonData.exteriorColorGroups[0].colors[0];
    const defaultWheel = jsonData.wheelGroups[0].wheels[0];
    const defaultInterior = jsonData.interiorGroups[0].interiors[0];
    const defaultSeat = jsonData.seatGroups[0].seats[0];

    this.selectedColorName = defaultColor.name;
    this.selectedWheelName = defaultWheel.name;
    this.selectedInteriorName = defaultInterior.name;
    this.selectedSeatName = defaultSeat.name;

    this.selectedColor = defaultColor;
    this.selectedWheel = defaultWheel;
    this.selectedInterior = defaultInterior;
    this.selectedSeat = defaultSeat;

    // Apply images
    this.images = [];
    this.applyComboImages(this.selectedColorName, this.selectedWheelName);
    this.applyComboImagesInteriorSeats(
      this.selectedInteriorName,
      this.selectedSeatName
    );
    this.selectedImage = this.images[0];
  });
}




// --- When scrolling to show each image section ---
  @ViewChild('wheelsSection') wheelsSection!: ElementRef;
  @ViewChild('exteriorColorsSection') exteriorColorsSection!: ElementRef;
  @ViewChild('seatsSection') seatsSection!: ElementRef;
  @ViewChild('interiorColorsSection') interiorColorsSection!: ElementRef;
  

  ngAfterViewInit(): void {
  // Order from TOP → BOTTOM of the page
  if (this.exteriorColorsSection) {
    this.observeSection(this.exteriorColorsSection, 0);
  }

  if (this.wheelsSection) {
    this.observeSection(this.wheelsSection, 1);
  }

  if (this.interiorColorsSection) {
    this.observeSection(this.interiorColorsSection, 6);
  }

  if (this.seatsSection) {
    this.observeSection(this.seatsSection, 7);
  }
}
observeSection(section: ElementRef, imgIndex: number) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.selectedImage = this.images[imgIndex] ?? this.images[0];
      }
    });
  }, { root: null, threshold: 0.5 });
  observer.observe(section.nativeElement);
}

setRoof(state: 'roofClosed' | 'roofOpen') {
  if (!this.isCabriolet || this.roofState === state) return;

  this.roofState = state;

  // Apply images with new roof state
  this.applyComboImages(this.selectedColorName, this.selectedWheelName);
  this.applyComboImagesInteriorSeats(this.selectedInteriorName, this.selectedSeatName);
}

toggleRoof() {
  if (!this.isCabriolet) return;

  this.setRoof(
    this.roofState === 'roofClosed' ? 'roofOpen' : 'roofClosed'
  );
}



  // --- SELECTORS ---
  selectColor(color: any) {
    const group = this.variantJson.exteriorColorGroups.find((g: any) => g.colors.some((c: any) => c.name === color.name));
    if (!group) return;
    this.selectedColor = { ...color, price: group.price };
    this.selectedColorName = color.name;
    this.updatePrice((group.price || 0) - (this.lastSelectedOptions['ExteriorColor']?.price || 0));
    this.lastSelectedOptions['ExteriorColor'] = group;
    this.applyComboImages(this.selectedColorName, this.selectedWheelName);
    this.triggerPricePop();
  }

  selectWheels(wheel: any) {
    this.selectedWheel = wheel;
    this.selectedWheelName = wheel.name;
    this.updatePrice((wheel.price || 0) - (this.lastSelectedOptions['Wheels']?.price || 0));
    this.lastSelectedOptions['Wheels'] = wheel;
    this.applyComboImages(this.selectedColorName, this.selectedWheelName);
    this.triggerPricePop();
  }

  selectInterior(interior: any) {
    this.selectedInterior = interior;
    this.selectedInteriorName = interior.name;
    this.updatePrice((interior.price || 0) - (this.lastSelectedOptions['Interior']?.price || 0));
    this.lastSelectedOptions['Interior'] = interior;
    this.applyComboImagesInteriorSeats(this.selectedInteriorName, this.selectedSeatName);
  }

  selectSeats(seat: any) {
    this.selectedSeat = seat;
    this.selectedSeatName = seat.name;
    this.updatePrice((seat.price || 0) - (this.lastSelectedOptions['Seats']?.price || 0));
    this.lastSelectedOptions['Seats'] = seat;
    this.applyComboImagesInteriorSeats(this.selectedInteriorName, this.selectedSeatName);
  }

  // --- IMAGE COMBOS ---
private applyComboImages(colorName: string, wheelName: string) {
  if (!colorName || !wheelName) return;

  const colorObj = this.combinedImageMap?.[colorName];
  if (!colorObj) return;

  let imagesForCombo: string[] | undefined;

  // ✅ DIFFERENT DATA SHAPE HANDLING
  if (this.isCabriolet) {
    imagesForCombo = colorObj?.[wheelName]?.[this.roofState];
  } else {
    imagesForCombo = colorObj?.[wheelName];
  }

  // ✅ FALLBACK IF WHEEL NOT FOUND
  if (!imagesForCombo || imagesForCombo.length === 0) {
    const wheelKeys = Object.keys(colorObj);
    if (wheelKeys.length > 0) {
      const firstWheel = colorObj[wheelKeys[0]];
      imagesForCombo = this.isCabriolet
        ? firstWheel?.[this.roofState]
        : firstWheel;
    }
  }

  if (!imagesForCombo || imagesForCombo.length === 0) return;

  const currentIndex = this.currentIndex;

  // Preserve interior + seat images (last 2 slots)
  const interiorImages = [...this.images.slice(6, 8)];

  this.images = [...imagesForCombo, ...interiorImages];
  this.selectedImage =
    this.images[Math.max(0, Math.min(currentIndex, this.images.length - 1))];
}



private applyComboImagesInteriorSeats(interiorName: string, seatName: string) {
  if (!interiorName || !seatName) return;

  const interiorObj = this.interiorSeatImageMap?.[interiorName];
  if (!interiorObj) return;

  let imagesForCombo: string[] | undefined;

  // ✅ SAME DATA SHAPE HANDLING
  if (this.isCabriolet) {
    imagesForCombo = interiorObj?.[seatName]?.[this.roofState];
  } else {
    imagesForCombo = interiorObj?.[seatName];
  }

  // ✅ SAME FALLBACK LOGIC (seat not found)
  if (!imagesForCombo || imagesForCombo.length === 0) {
    const seatKeys = Object.keys(interiorObj);
    if (seatKeys.length > 0) {
      const firstSeat = interiorObj[seatKeys[0]];
      imagesForCombo = this.isCabriolet
        ? firstSeat?.[this.roofState]
        : firstSeat;
    }
  }

  if (!imagesForCombo || imagesForCombo.length < 2) return;

  const currentIndex = this.currentIndex;

  // ✅ SAME IDEA AS COLOR/WHEEL — replace only our slice
  const updatedImages = [...this.images];

  // slot 6 (7th image) = interior
  updatedImages[6] = imagesForCombo[0];

  // slot 7 (8th image) = seat / roof dependent
  updatedImages[7] = this.isCabriolet
    ? (this.roofState === 'roofOpen'
        ? imagesForCombo[2] ?? imagesForCombo[1]
        : imagesForCombo[1])
    : imagesForCombo[1];

  this.images = updatedImages;
  this.selectedImage =
    this.images[Math.max(0, Math.min(currentIndex, this.images.length - 1))];
}



 // --- Technology ---
selectTechnology(option: any) {
// Only open modal, don’t toggle selection
this.openTechModal(option);
}


  // Add tech
  // --- PRICE ---
  updatePrice(change: number) {
    const start = this.displayedPrice;
    const end = this.displayedPrice + change;
    this.totalPrice += change;

    const duration = 500;
    const frameRate = 60;
    const steps = duration / (1000 / frameRate);
    let currentStep = 0;

    const stepValue = (end - start) / steps;
    const interval = setInterval(() => {
      currentStep++;
      this.displayedPrice = start + stepValue * currentStep;
      if (currentStep >= steps) {
        this.displayedPrice = end;
        clearInterval(interval);
      }
    }, 1000 / frameRate);
  }

  triggerPricePop() {
    this.pricePopState = 'popped';
    setTimeout(() => (this.pricePopState = 'normal'), 300);
  }

  // --- TECHNOLOGY & ACCESSORIES ---
  openTechModal(tech: any) {
    this.activeTech = tech;
    this.showTechModal = true;
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  closeTechModal() {
    this.showTechModal = false;
    this.activeTech = null;
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }

 toggleTechnology(tech: any) {
if (!tech) return;
if (this.selectedTechnology.has(tech.name)) {
// Remove tech
this.selectedTechnology.delete(tech.name);
this.updatePrice(-tech.price);
} else {
  this.selectedTechnology.add(tech.name);
  this.updatePrice(tech.price);
}
}

  selectAccessory(accessory: any) {
    if (!accessory) return;
    if (this.selectedAccessories.has(accessory.name)) {
      this.selectedAccessories.delete(accessory.name);
      this.updatePrice(-accessory.price);
    } else {
      this.selectedAccessories.add(accessory.name);
      this.updatePrice(accessory.price);
    }
  }

  // --- SCROLL ---
  scrollToSummary() {
    const target = document.getElementById("summary-section");
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;

    const duration = 1000;
    let startTime: number | null = null;

    const animateScroll = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  }

  // --- NAVIGATION ---
  ChangeModel() {
    this.router.navigateByUrl('/models').catch(err => console.error('Navigation error:', err));
  }

searchTerm: string = '';

  get searchResults() {
  if (!this.searchTerm || !this.searchTerm.trim()) return [];

  const term = this.searchTerm.toLowerCase();
  const results: any[] = [];

  // --- Exterior Colors ---
  this.variantJson.exteriorColorGroups?.forEach((group: any) => {
    group.colors.forEach((color: any) => {
      if (color.name.toLowerCase().includes(term)) {
        results.push({ 
          name: color.name, 
          img: color.img, 
          price: color.price, 
          type: 'Exterior Color' 
        });
      }
    });
  });

  // --- Wheels ---
  this.variantJson.wheelGroups?.forEach((group: any) => {
    group.wheels.forEach((wheel: any) => {
      if (wheel.name.toLowerCase().includes(term)) {
        results.push({
          name: wheel.name,
          img: wheel.img,
          price: wheel.price,
          type: 'Wheel'
        });
      }
    });
  });

  // --- Interiors ---
  this.variantJson.interiorGroups?.forEach((group: any) => {
    group.interiors.forEach((interior: any) => {
      if (interior.name.toLowerCase().includes(term)) {
        results.push({
          name: interior.name,
          img: interior.img,
          price: interior.price,
          type: 'Interior'
        });
      }
    });
  });

  // --- Seats ---
  this.variantJson.seatGroups?.forEach((group: any) => {
    group.seats.forEach((seat: any) => {
      if (seat.name.toLowerCase().includes(term)) {
        results.push({
          name: seat.name,
          img: seat.img,
          price: seat.price,
          type: 'Seat'
        });
      }
    });
  });

  // --- Technology ---
  this.variantJson.technologyGroups?.forEach((group: any) => {
    group.seats.forEach((tech: any) => {
      if (tech.name.toLowerCase().includes(term)) {
        results.push({
          name: tech.name,
          img: tech.img,
          price: tech.price,
          type: 'Technology'
        });
      }
    });
  });

  // --- Accessories ---
  this.variantJson.accessories?.forEach((accessory: any) => {
    if (accessory.name.toLowerCase().includes(term)) {
      results.push({
        name: accessory.name,
        img: accessory.img,
        price: accessory.price,
        type: 'Accessory'
      });
    }
  });

  return results;
}

// --- Check if item is selected ---
isSelected(item: any): boolean {
  switch(item.type) {
    case 'Exterior Color':
      return this.selectedColor?.name === item.name;
    case 'Wheel':
      return this.selectedWheel?.name === item.name;
    case 'Interior':
      return this.selectedInterior?.name === item.name;
    case 'Seat':
      return this.selectedSeat?.name === item.name;
    case 'Technology':
      return this.selectedTechnology.has(item.name);
    case 'Accessory':
      return this.selectedAccessories.has(item.name);
    default:
      return false;
  }
}

// --- Apply selection when a search result is clicked ---
selectSearchItem(item: any): void {
  switch(item.type) {
    case 'Exterior Color':
      this.selectColor({ name: item.name, img: item.img, price: item.price });
      break;
    case 'Wheel':
      this.selectWheels({ name: item.name, img: item.img, price: item.price });
      break;
    case 'Interior':
      this.selectInterior({ name: item.name, img: item.img, price: item.price });
      break;
    case 'Seat':
      this.selectSeats({ name: item.name, img: item.img });
      break;
    case 'Technology':
      this.selectTechnology({ name: item.name, img: item.img, price: item.price });
      break;
    case 'Accessory':
      this.selectAccessory({ name: item.name, img: item.img });
      break;
  }
}
// --- GET METHODS FOR SEARCH & PDF ---
getTechnologyByName(name: string) {
  for (const group of this.variantJson.technologyGroups || []) {
    for (const tech of group.seats || []) { // note: in your JSON, techs are inside 'seats'?
      if (tech.name === name) return tech;
    }
  }
  return null;
}

getAccessoryByName(name: string) {
  return (this.variantJson.accessories || []).find((acc: { name: string; }) => acc.name === name) || null;
}




  // --- QUOTE MODAL ---
  openQuoteModal() {
    this.showQuoteModal = true;
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  closeQuoteModal() {
    this.showQuoteModal = false;
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }

  private isFormValid(): boolean {
    return this.quoteForm.name.trim() !== '' &&
           this.quoteForm.surname.trim() !== '' &&
           this.quoteForm.email.includes('@') &&
           this.quoteForm.mobile.trim() !== '' &&
           this.quoteForm.city.trim() !== '';
  }

  submitQuote() {
    if (this.sending || !this.isFormValid()) {
      alert('Please fill in all required fields.');
      return;
    }

    const payload = {
      name: this.quoteForm.name,
      surname: this.quoteForm.surname,
      email: this.quoteForm.email,
      mobile: this.quoteForm.mobile,
      city: this.quoteForm.city,
      model: this.variantJson.model,
      price: `€${this.totalPrice.toLocaleString()}`,
      color: this.selectedColorName,
      wheels: this.selectedWheelName,
      interior: this.selectedInteriorName,
      seats: this.selectedSeatName,
      technology: Array.from(this.selectedTechnology).join(', ') || '—',
      accessories: Array.from(this.selectedAccessories).join(', ') || '—',
      reference: 'P-' + Date.now()
    };

    this.sending = true;
    emailjs.send('service_emf13af', 'template_g0hl752', payload, 'CgqlnJDNlBgtxlC5j')
      .then(() => {
        this.sending = false;
        alert('Quote request sent successfully!');
        this.closeQuoteModal();
      })
      .catch(err => {
        this.sending = false;
        console.error('EmailJS error', err);
        alert('Failed to send quote request.');
      });
  }

  // --- PDF EXPORT ---
  downloadSummaryPdf() {
  const pdfTemplate = document.getElementById('pdf-template') as HTMLElement;
  if (!pdfTemplate) return;

  pdfTemplate.style.display = 'block';
  pdfTemplate.style.position = 'absolute';
  pdfTemplate.style.left = '-9999px';
  pdfTemplate.style.top = '0';

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 10;
  const pages = pdfTemplate.querySelectorAll('.pdf-page');

  // 🔥 Wait for images to load
  const waitForImages = (element: HTMLElement) => {
    const images = element.querySelectorAll('img');
    return Promise.all(
      Array.from(images).map(img => {
        const image = img as HTMLImageElement;
        if (image.complete) return Promise.resolve();
        return new Promise(resolve => {
          image.onload = resolve;
          image.onerror = resolve;
        });
      })
    );
  };

  const renderPage = (index: number) => {
    if (index >= pages.length) {
      pdfTemplate.style.display = 'none';
      pdf.save('Porsche-Configuration.pdf');
      return;
    }

    const currentPage = pages[index] as HTMLElement;

    waitForImages(currentPage).then(() => {
      html2canvas(currentPage, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff'
      }).then(canvas => {

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pageWidth - margin * 2;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (index > 0) pdf.addPage();

        pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth, pdfHeight);

        renderPage(index + 1);
      });
    });
  };

  renderPage(0);
}

  // --- MODAL SCROLL LISTENER ---
  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (this.showTechModal && this.modalContent) {
      event.preventDefault();
      this.modalContent.nativeElement.scrollTop += event.deltaY * 0.35;
    }
    if (this.showQuoteModal && this.quoteModalContent) {
      event.preventDefault();
      this.quoteModalContent.nativeElement.scrollTop += event.deltaY * 0.35;
    }
  }
  toggleSection(section: string): void { this.sectionStates[section] = !this.sectionStates[section]; }
  
}
