import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('title') strCardTitle: String;

  constructor() { }

  ngOnInit() {
  }

}
