import { Component, OnInit } from '@angular/core';
import { IEmployeeInfo } from '../Data-Models/iemployee-info';

@Component({
  selector: 'fai-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeInfo: IEmployeeInfo = {
    Name: 'johny',
    Project: 'LVIS',
    Technology: 'DotNet',
    Role: 'Developer',
    DOJ: '23/12/2020',
    Id: 623456,
    Rating:4
  };

  constructor() {}

  ngOnInit(): void {}

  onRatingClicked(message: string): void {
    console.log(message);
  }
}
