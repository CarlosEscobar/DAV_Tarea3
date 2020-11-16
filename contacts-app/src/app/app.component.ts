import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-app';

  contacts = [
    {
      "id":1,
      "name":"Jamie",
      "email":"jamie@gmail.com",
      "phone":"+504 99913075",
      "title":"Sr."
    },
    {
      "id":2,
      "name":"Seth",
      "email":"seth@gmail.com",
      "phone":"+504 99913085",
      "title":"Otro"
    },
    {
      "id":3,
      "name":"Peggy",
      "email":"peggy@gmail.com",
      "phone":"+504 99913095",
      "title":"Sra."
    }
  ];
  filteredContacts = this.contacts;

  receiveDelete(id: number){
    var index = -1;
    for(var i=0; i<this.contacts.length; i++){
      if(this.contacts[i].id == id) {
        index = i
        break;
      }
    }
    if (index > -1) {
      this.contacts.splice(index, 1);
      this.filteredContacts = this.contacts;
    }
  }

  filterContactsByName(name: string){
    if(name == "") {
      this.filteredContacts = this.contacts;
    } else {
      this.filteredContacts = this.contacts.filter(contact => contact.name.includes(name));
    }
  }

  filterContactsByPhone(phone: string){
    if(phone == "") {
      this.filteredContacts = this.contacts;
    } else {
      this.filteredContacts = this.contacts.filter(contact => contact.phone.includes(phone));
    }
  }

  filterContactsByEmail(email: string){
    if(email == "") {
      this.filteredContacts = this.contacts;
    } else {
      this.filteredContacts = this.contacts.filter(contact => contact.email.includes(email));
    }
  }

}
