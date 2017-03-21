import { Routes } from '@angular/router';

import { ProductListComponent } from './+product/product-list/product-list.component';


export const ROUTES: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
