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
    this.dataService.GetEmployeeInfoObservableHttp().subscribe(
      (data) => {
        console.log(data);
        this.employeeInfo=data[0];
      },
      (error) => console.log(error)
    );
    // this.dataService.GetEmployeeInfoObservable().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.employeeInfo=data;
    //   },
    //   (error) => console.log(error)
    // );
    // setTimeout(() => {
    //   this.employeeInfo = this.dataService.GetEmployeeInfo();
    // }, 3000);
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}
