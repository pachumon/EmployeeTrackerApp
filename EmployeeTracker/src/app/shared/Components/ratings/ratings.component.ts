import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fai-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  @Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {


  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
