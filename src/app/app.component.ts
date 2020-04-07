import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {without} from 'lodash';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coding Challenge';
  theList: object[];

  sum(){
    let sum:number = 0;
    let items = document.querySelectorAll('.payment-value-item');
    console.log(items);
    for(let x in items) {
      console.log(x);           
    }
    //console.log(sum);
    //alert(sum);
  }
  addPaymentItem(thePayment: object){
    this.theList.unshift(thePayment);
  }

  deletePaymentItem(thePayment: object){
    this.theList = without(this.theList, thePayment);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let sum: number = 0;
    this.http.get<Object[]>("../assets/data.json").subscribe(data => {
      console.log(data);
      
      //console.log(sum);
      this.theList = data;
      for(let key in data) {
        var obj = data[key];
        /*if( obj['id'] == id ) {
            return obj['name'];
        }*/
        console.log(obj["paymentValue"]);
        //sum=sum+obj["paymentValue"];
    }
    });
    //this.sum();
    ReactiveFormConfig.set({"validationMessage":{"numeric":"Please enter valid number"}});
  }

  
}
