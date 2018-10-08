import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  arrContacts = [
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
    new Contact('paco', '123', '444'),
  ];
  objContact: Contact = new Contact('paco', '123', '444');
  constructor() { }

  ngOnInit() {

  }

}
