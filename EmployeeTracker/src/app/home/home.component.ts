import { Component, OnInit } from '@angular/core';
import { IEmployeeInfo } from '../Data-Models/iemployee-info';
import { AppDataService } from '../shared/Services/app-data.service';

@Component({
  selector: 'fai-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeInfo: IEmployeeInfo = null;

  constructor(private dataService: AppDataService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.employeeInfo = this.dataService.GetEmployeeInfo();
    }, 3000);
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}
