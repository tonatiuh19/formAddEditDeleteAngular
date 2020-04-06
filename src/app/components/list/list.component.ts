import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() paymentList;
  @Output() deleteEvt =  new EventEmitter();
  handleDelete(thePayment: object){
    console.log(thePayment);
    this.deleteEvt.emit(thePayment);
  }
 
}
