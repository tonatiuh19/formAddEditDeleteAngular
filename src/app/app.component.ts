import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {without} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coding Challenge';
  theList: object[];

  deletePaymentItem(thePayment: object){
    this.theList = without(this.theList, thePayment);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Object[]>("../assets/data.json").subscribe(data => {
      console.log(data);
      this.theList = data;
    });
  }
}
