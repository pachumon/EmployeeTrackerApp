import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fai-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeName: string = 'James';

  textStyle: string = 'blue';

  constructor() {}

  ngOnInit(): void {}

  btnClick(){
    console.log('invoked');
    this.employeeName="btnclicked"
  };
}
