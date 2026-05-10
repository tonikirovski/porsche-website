import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('introVideo') video!: ElementRef<HTMLVideoElement>;

  showVideo = false;
  posterShown = true;

  constructor(private router: Router) {}

  // =========================
  // INTRO VIDEO
  // =========================
ngAfterViewInit() {
  const videoEl = this.video.nativeElement;

  videoEl.muted = true;
  videoEl.playsInline = true;
  videoEl.setAttribute('webkit-playsinline', 'true');

  videoEl.addEventListener('error', () => {
    this.showVideo = false;
  });

  // 🔥 FORCE EARLY LOAD
  videoEl.load();

  setTimeout(() => {
    const playVideo = () => {
      videoEl.currentTime = 0;

      videoEl.play()
        .then(() => {
          this.showVideo = true;
        })
        .catch(() => {
          this.showVideo = false;

          const unlock = () => {
            videoEl.play().then(() => {
              this.showVideo = true;
            });
          };

          document.body.addEventListener('touchstart', unlock, { once: true });
          document.body.addEventListener('click', unlock, { once: true });
        });
    };

    if (videoEl.readyState >= 2) {
      playVideo();
    } else {
      videoEl.addEventListener('canplay', playVideo, { once: true });
    }
  }, 4000);

    // FADE-UP OBSERVER
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
  }

  // =========================
  // NAVIGATION
  // =========================
  goCarrera() {
    this.router.navigateByUrl('/models/p911/carrera');
  }

  goMacan() {
    this.router.navigateByUrl('/models/macan/macan');
  }

  goGt3rs() {
    this.router.navigateByUrl('/models/p911/gt3rs');
  }

  goModels() {
    this.router.navigate(['/models']);
  }

  goToModel(model: string) {
    this.router.navigate(['/models'], { queryParams: { model } });
  }

  // =========================
  // HOVER VIDEOS (DESKTOP)
  // =========================
  playVideo(event: any) {
    const video: HTMLVideoElement =
      event.currentTarget.querySelector('.hv-video');

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const play = () => {
      video.currentTime = 0;
      const promise = video.play();

      if (promise !== undefined) {
        promise.catch(err => {
          console.warn('Hover video blocked', err);
          document.body.addEventListener(
            'click',
            () => video.play(),
            { once: true }
          );
        });
      }
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener('loadeddata', play, { once: true });
    }
  }

  stopVideo(event: any) {
    const video: HTMLVideoElement =
      event.currentTarget.querySelector('.hv-video');

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

  // =========================
  // MOBILE SLIDER (SWIPE)
  // =========================

  slides = [
    '911',
    '718',
    'Taycan',
    'Panamera',
    'Macan',
    'Cayenne'
  ];

  currentIndex = 0;

  private startX = 0;
  private currentX = 0;
  private isDragging = false;
  private threshold = 50;

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;

    this.currentX = event.touches[0].clientX;

    // optional: prevents page scroll while swiping
    event.preventDefault();
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;

    if (diff > this.threshold) {
      this.next();
    } else if (diff < -this.threshold) {
      this.prev();
    }

    this.isDragging = false;
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) %
      this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
