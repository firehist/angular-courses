import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
    selector: 'nat-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <nat-products></nat-products>
    </div>
    `,
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle: string = `Product Management`;
}
