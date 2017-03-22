import { Injectable } from '@angular/core';
import { CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IProduct } from '../../+products/product-list.component';

@Injectable()
export class AdminGuard implements CanActivate, Resolve<IProduct> {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //this.router.navigate(['/products']);
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct {
    let id = parseInt(route.params['id']);

    return {
      "id": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    };
  }

}
