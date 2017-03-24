import { Routes } from '@angular/router';

import { WelcomeComponent } from './+welcome/welcome.component';
import { ProductDetailComponent } from './+products/product-detail.component';
import { ProductListComponent } from './+products/product-list.component';
import { ProductExistsGuard } from './shared/guards/product-exists.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductExistsGuard]
  },
  {path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];
