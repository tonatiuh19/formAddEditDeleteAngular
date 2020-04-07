import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit {

  @Output() addEvt = new EventEmitter();

  handleAdd(formInfo: any){
    const tempItem: object = {
      paymentValue: formInfo.paymentValue,
      paymentDate: formInfo.paymentDate
    };
    this.addEvt.emit(tempItem);
    this.closeModal();
  }

  closeModal() {
    document.getElementById("closeModalButton").click();
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^\d*.?\d{0,2}$/;

    if (!reg.test(input)) {
      e.preventDefault();
    }
}
  

}
