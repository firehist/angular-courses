import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';

export interface IProduct {
    id: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

@Injectable()
export class ProductService {

  static BASE_URL = 'http://localhost:3000/products';

  products: IProduct[] = [];

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(ProductService.BASE_URL)
      .map(response => response.json())
      .do(products => console.log(`Retrieve products(${products.length})`, products))
      .catch(err => {
        console.error(`Something goes wrong!`, err);
        return Observable.throw(err);
      });
  }

  getProductById(id: number): Observable<IProduct> {
    return this.getProducts()                           // Retrieve the products collection (eg: [x,y,z])
      .map(products => {
        const foundProduct = products.find(product => product.id === id);
        if (!foundProduct) {
          throw new Error(`Product(${id}) not found!`);
        }
        return foundProduct;
      })
      .catch(error => {
        console.error(error.message);
        return Observable.throw(error.message);
      });
  }

}
