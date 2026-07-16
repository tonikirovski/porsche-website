import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { BrandComponent } from './brand/brand.component';
import { CompareComponent } from './compare/compare.component';
import { VariantComponent } from './variant/variant.component';
import { CarConfigComponent } from './models/configure/car-config/car-config.component';


export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: null } },

  { path: 'models', component: ModelsComponent, data: { animation: 'ModelsPage' } },

  { path: 'models/:model/:variant', component: VariantComponent },

  { path: 'configure/:variant', component: CarConfigComponent },

  { path: 'compare', component: CompareComponent },

  { path: 'brand', component: BrandComponent },

  { path: '**', redirectTo: '' }
];

