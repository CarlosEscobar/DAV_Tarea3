import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ListItemContactComponent } from './list-item-contact/list-item-contact.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ListItemContactComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
