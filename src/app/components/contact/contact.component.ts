import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('contact') objContact: Contact;

  constructor() { }

  ngOnInit() {
    console.log(Object.keys(this.objContact));
  }

}
