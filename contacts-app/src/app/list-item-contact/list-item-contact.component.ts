import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-contact',
  templateUrl: './list-item-contact.component.html',
  styleUrls: ['./list-item-contact.component.css']
})
export class ListItemContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onContactClick() {
    var contactDetailId = "contact_" + this.id + "_content";
    document.getElementById(contactDetailId).style.display = "block";
  }

  cancelContactDetail(){
    var contactDetailId = "contact_" + this.id + "_content";
    document.getElementById(contactDetailId).style.display = "none";
  }

  deleteContact(){
    this.sendDelete.emit(this.id);
  }

  @Input() id: number;
  @Input() name: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() title: string;

  @Output() sendDelete = new EventEmitter<number>();
}
