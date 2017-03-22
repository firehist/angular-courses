import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> =
      new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
      // Convert x out of 5 starts
      // to y out of 86px width
      this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
