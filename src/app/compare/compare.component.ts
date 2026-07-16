import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VARIANTS, Variant } from '../shared/variants';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  variants: Variant[] = VARIANTS;

  selectedVariant1?: Variant;
  selectedVariant2?: Variant;

  pickerOpen = false;
  activeSlot: 1 | 2 = 1;

  expandedSections: Record<string, boolean> = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const model = params['model'];

      if (model) {
        const preselected = VARIANTS.find(
          v => v.route && v.route.includes(model)
        );

        if (preselected) {
          this.selectedVariant1 = preselected;
        }
      }
    });
  }


  private setBodyScroll(lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
  }


  openPicker(slot: 1 | 2) {
    this.activeSlot = slot;
    this.pickerOpen = true;

    this.setBodyScroll(true);
  }

  closePicker() {
    this.pickerOpen = false;

    this.setBodyScroll(false);
  }

  pickVariant(v: Variant) {
    if (this.activeSlot === 1) {
      this.selectedVariant1 = v;
    } else {
      this.selectedVariant2 = v;
    }

    this.pickerOpen = false;
    this.setBodyScroll(false);
  }

  // =========================
  // SELECTION HELPERS
  // =========================
  isAlreadySelected(v: Variant): boolean {
    return (
      this.selectedVariant1?.name === v.name ||
      this.selectedVariant2?.name === v.name
    );
  }

  toggleSection(key: string) {
    this.expandedSections[key] = !this.expandedSections[key];
  }

  // =========================
  // SAFE DATA ACCESS
  // =========================
  getSpecValue(
    variant: Variant | undefined,
    sectionKey: string,
    index: number
  ): string | number | '—' {
    const section = variant?.technical?.sections?.find(
      s => s.key === sectionKey
    );

    return section?.specs?.[index]?.value ?? '—';
  }

  // =========================
  // SECTION MERGE LOGIC
  // =========================
  getAllSections(v1?: Variant, v2?: Variant) {
    if (!v1 && !v2) return [];

    const sections1 = v1?.technical?.sections ?? [];
    const sections2 = v2?.technical?.sections ?? [];

    const allKeys = new Set([
      ...sections1.map(s => s.key),
      ...sections2.map(s => s.key)
    ]);

    const allSections: typeof sections1 = [];

    allKeys.forEach(key => {
      const s1 = sections1.find(s => s.key === key);
      const s2 = sections2.find(s => s.key === key);

      allSections.push(s1 || s2!);
    });

    return allSections;
  }

  // =========================
  // SAFETY CLEANUP (IMPORTANT)
  // =========================
  ngOnDestroy() {
    this.setBodyScroll(false);
  }
}