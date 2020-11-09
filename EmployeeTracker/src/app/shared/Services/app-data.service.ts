import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { IEmployeeInfo } from 'src/app/Data-Models/iemployee-info';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  constructor(private http: HttpClient) {}

  GetEmployeeInfo = (): IEmployeeInfo => {
    let employeeInfo: IEmployeeInfo = {
      Name: 'johny',
      Project: 'LVIS',
      Technology: 'DotNet',
      Role: 'Developer',
      DOJ: '23/12/2020',
      Id: 623456,
      Rating: 4,
    };

    return employeeInfo;
  };

  GetEmployeeInfoObservable = (): Observable<IEmployeeInfo> => {
    let employeeInfo: IEmployeeInfo = {
      Name: 'johny',
      Project: 'LVIS',
      Technology: 'DotNet',
      Role: 'Developer',
      DOJ: '23/12/2020',
      Id: 623456,
      Rating: 4,
    };

    return of(employeeInfo).pipe(
      tap((x) => console.log(x)),
      delay(5000)
    );
  };

  GetEmployeeInfoObservableHttp = (): Observable<IEmployeeInfo> => {
    const EmpInfoUrl = 'http://localhost:3600/employees?Id=612345';
    return this.http.get<IEmployeeInfo>(EmpInfoUrl).pipe(
      tap((x) => console.log(x)),
      delay(3000)
    );
  };
}
