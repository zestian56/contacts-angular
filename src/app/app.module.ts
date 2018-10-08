import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { TableRowColorDirective } from './directives/table-row-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TableComponent,
    CardComponent,
    ContactComponent,
    TableRowColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
