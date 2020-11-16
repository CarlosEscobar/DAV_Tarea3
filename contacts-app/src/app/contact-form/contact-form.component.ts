import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  titles: string[] = ['Sr.','Sra.','Otro'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.sendFormData.emit({
      "id":this._id,
      "name":this._name,
      "email":this._email,
      "phone":this._phone,
      "title":this._title
    });
  }

  @Input() _id: number;
  @Input() _name: string;
  @Input() _email: string;
  @Input() _phone: string;
  @Input() _title: string;

  @Output() sendFormData = new EventEmitter<any>();

}
