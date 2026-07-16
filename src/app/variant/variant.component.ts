import {
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { VARIANTS, Variant } from 'shared/variants';

@Component({
  selector: 'app-variant',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class VariantComponent {

  variant!: Variant;
  sections: any[] = [];
  expandedSection: string | null = null;
  showDetailsPanel = false;

  currentModel!: string;
  currentVariant!: string;
  modelVariants: Variant[] = [];

  acceleration = 0;
  powerKw = 0;
  powerPs = 0;
  topSpeed = 0;

  private animated = false;

  @ViewChild('performanceSection', { static: false })
  performanceSection!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

getVariantDisplayName(variant: any): string {
  const modelPrefix = variant.model;

  if (variant.name.startsWith(modelPrefix + ' ')) {
    return variant.name.replace(modelPrefix + ' ', '');
  }

  return variant.name;
}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.currentModel = params['model'];
    this.currentVariant = params['variant'];

    const fullRoute = `/models/${this.currentModel}/${this.currentVariant}`.toLowerCase();

    // Find variant by exact route or fallback to model + name
    let foundVariant = VARIANTS.find(
      v => v.route?.toLowerCase() === fullRoute
    );

    if (!foundVariant) {
      foundVariant = VARIANTS.find(
        v =>
          v.model?.toLowerCase() === this.currentModel.toLowerCase() &&
          v.name?.toLowerCase() === this.currentVariant.toLowerCase()
      );
    }

    if (!foundVariant) {
      console.error('Variant not found:', fullRoute);
      this.router.navigate(['/models']);
      return;
    }

    this.variant = foundVariant;

    
  this.modelVariants = VARIANTS.filter(v =>
  v.route?.toLowerCase().startsWith(`/models/${this.currentModel.toLowerCase()}/`)
); 

    this.sections = this.variant.technical?.sections || [];
    this.resetStats();
  });
}

navigateToVariant(variantName: string) {
  if (this.variant?.name === variantName) return;

  const selected = this.modelVariants.find(v => v.name === variantName);

  if (selected?.route) {
    this.router.navigate([selected.route]);
  }
}

  toggleSection(key: string) {
    this.expandedSection = this.expandedSection === key ? null : key;
  }

  viewTechnicalDetails() {
    this.showDetailsPanel = true;
  }

  closeDetailsPanel() {
    this.showDetailsPanel = false;
  }

configureCar() {
  this.router.navigate(['/configure', this.currentVariant]);
}

  compareModel() {
    this.router.navigate(['/compare'], {
      queryParams: { model: this.route.snapshot.params['variant'] }
    });
  }

    resetStats() {
    this.acceleration = 0;
    this.powerKw = 0;
    this.powerPs = 0;
    this.topSpeed = 0;
    this.animated = false;
  }

  //  STATS SCROLL ANIMATION

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.performanceSection || this.animated || !this.variant?.technical)
      return;

    const top = this.performanceSection.nativeElement
      .getBoundingClientRect().top;

    if (top < window.innerHeight * 0.9) {
      this.animated = true;

      this.animateValue('acceleration', this.variant.technical.acceleration!, 1500);
      this.animateValue('powerKw', this.variant.technical.powerKw!, 1500);
      this.animateValue('powerPs', this.variant.technical.powerPs!, 1500);
      this.animateValue('topSpeed', this.variant.technical.topSpeed!, 1500);
    }
  }

  animateValue(
    property: 'acceleration' | 'powerKw' | 'powerPs' | 'topSpeed',
    end: number,
    duration: number
  ) {
    const start = 0;
    const range = end - start;
    const stepTime = 10;
    const steps = duration / stepTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const value =
        property === 'acceleration'
          ? +(start + (range * currentStep) / steps).toFixed(1)
          : Math.round(start + (range * currentStep) / steps);

      this[property] = value as any;

      if (currentStep >= steps) {
        this[property] = end as any;
        clearInterval(interval);
      }
    }, stepTime);
  }

  padWithZeros(value: number, digits = 3): string {
    return value.toString().padStart(digits, '0');
  }

  get bodySection() {
    return this.sections.find(s => s.key === 'body');
  }

  get height() {
    return this.getSpecValue('Height');
  }

  get length() {
    return this.getSpecValue('Length');
  }

  get wheelbase() {
    return this.getSpecValue('Wheelbase');
  }

  get widthMirrorsFolded() {
    return this.getSpecValue('Width (mirrors folded)');
  }

  private getSpecValue(label: string) {
    return this.bodySection?.specs.find(
      (s: any) => s.label.toLowerCase() === label.toLowerCase()
    )?.value;
  }

  get wltpFuelConsumption(): string | number | null {
  const wltpSection = this.sections?.find(s => s.key === 'wltp');
  return wltpSection?.specs?.[0]?.value ?? null;
}
}