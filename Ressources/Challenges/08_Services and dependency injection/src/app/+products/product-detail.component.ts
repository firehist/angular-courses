import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myProductId: number = 0;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => this.myProductId = parseInt(params['id'])
    )

    debugger;
  }



}
