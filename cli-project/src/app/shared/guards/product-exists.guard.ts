import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductService } from '../models/product.service';

@Injectable()
export class ProductExistsGuard implements CanActivate {
  constructor(private _productService: ProductService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this._productService.getProductById(parseInt(next.params['id']))
        .map(product => true);
  }
}
