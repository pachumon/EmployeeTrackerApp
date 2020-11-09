import { Injectable } from '@angular/core';
import { IEmployeeInfo } from 'src/app/Data-Models/iemployee-info';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  GetEmployeeInfo=():IEmployeeInfo=>{

    let employeeInfo: IEmployeeInfo = {
      Name: 'johny',
      Project: 'LVIS',
      Technology: 'DotNet',
      Role: 'Developer',
      DOJ: '23/12/2020',
      Id: 623456,
      Rating:4
    };

    return employeeInfo;
  }
}
