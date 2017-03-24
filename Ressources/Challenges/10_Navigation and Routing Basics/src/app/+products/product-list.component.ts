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
    this.productService.getProducts()
      .subscribe(
        products => this.products = products,
        err => console.log('An error occured', err)
      );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(event) {
    console.log('Event received from starComponent: ', event);
  }

}
