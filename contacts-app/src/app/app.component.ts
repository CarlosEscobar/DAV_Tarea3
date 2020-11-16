import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'contacts-app';

  constructor() { }

  ngOnInit(): void {
    this.initializeModal();
  }

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
  modalType = "Agregar";
  appId: string;
  appName: string;
  appEmail: string;
  appPhone: string;
  appTitle: string;

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

  receiveAddContact(){
    this.modalType = "Agregar";
    this.appName = "";
    this.appEmail = "";
    this.appPhone = "";
    this.appTitle = "Sr.";
    document.getElementById("myModal").style.display = "block";
  }

  initializeModal(){
    var modal = document.getElementById("myModal");
    var span = document.getElementById("closeModal");

    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  receiveEdit(contact: any){
    this.modalType = "Editar";
    this.appId = contact.id;
    this.appName = contact.name;
    this.appEmail = contact.email;
    this.appPhone = contact.phone;
    this.appTitle = contact.title;
    document.getElementById("myModal").style.display = "block";
  }

  receiveFormData(contact: any){
    if(this.modalType == "Agregar") {
      var newId = this.contacts[this.contacts.length-1].id + 1;
      this.contacts.push({
        "id":newId,
        "name":contact.name,
        "email":contact.email,
        "phone":contact.phone,
        "title":contact.title
      });
    } else {
      for(var i=0; i<this.contacts.length; i++){
        if(this.contacts[i].id == contact.id) {
          this.contacts[i].name = contact.name;
          this.contacts[i].email = contact.email;
          this.contacts[i].phone = contact.phone;
          this.contacts[i].title = contact.title;
          break;
        }
      }
    }

    this.filteredContacts = this.contacts;
    this.modalType = "Agregar";
    this.appName = "";
    this.appEmail = "";
    this.appPhone = "";
    this.appTitle = "Sr.";
    document.getElementById("myModal").style.display = "none";
  }

}
