import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receiveDelete(id: number){
    this.sendDelete.emit(id);
  }

  onSendAddContact(){
    this.sendAddContact.emit();
  }

  receiveEditData(contact: any){
    this.sendEdit.emit(contact);
  }

  @Input() contacts: any[];

  @Output() sendDelete = new EventEmitter<number>();

  @Output() sendAddContact = new EventEmitter();

  @Output() sendEdit = new EventEmitter<any>();

}
