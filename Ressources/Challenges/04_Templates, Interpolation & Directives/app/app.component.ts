import { Component } from '@angular/core';

@Component({
    selector: 'nat-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <nat-products></nat-products>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = `Product Management`;
}
