import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.css']
})
export class ContactFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(name: string){
    this.nameChanged.emit(name);
  }

  onPhoneChange(phone: string){
    this.phoneChanged.emit(phone);
  }

  onEmailChange(email: string){
    this.emailChanged.emit(email);
  }

  @Output() nameChanged = new EventEmitter<string>();
  @Output() phoneChanged = new EventEmitter<string>();
  @Output() emailChanged = new EventEmitter<string>();

}
