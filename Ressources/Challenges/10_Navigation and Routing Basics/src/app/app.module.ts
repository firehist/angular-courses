import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { ProductListComponent } from './+products/product-list.component';
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { StarComponent } from './shared/ui/star/star.component';
import { ProductService } from './shared/models/product.service';
import { ProductDetailComponent } from './+products/product-detail.component';
import { WelcomeComponent } from './+welcome/welcome.component';

import { ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ArrayFilterPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
