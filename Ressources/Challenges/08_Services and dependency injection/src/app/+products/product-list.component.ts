import { Component, OnInit } from '@angular/core';

import { IProduct, ProductService } from '../shared/models/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listFilter: string;
  imageWidth: number = 50;
  imageMargin: number = 5;
  showImage: boolean = true;
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    /* Observable version is
    this.productObservableService().subscribe(
      _ => this.products = _
    );
    */
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(event) {
    console.log('Event received from starComponent: ', event);
  }

}
