import { Routes } from '@angular/router';

import { WelcomeComponent } from './+welcome/welcome.component';
import { ProductDetailComponent } from './+products/product-detail.component';
import { ProductListComponent } from './+products/product-list.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];
