import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { TableRowColorDirective } from './directives/table-row-color.directive';
import { FormMOdalComponent } from './components/form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CardComponent,
    ContactComponent,
    TableRowColorDirective,
    FormMOdalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
