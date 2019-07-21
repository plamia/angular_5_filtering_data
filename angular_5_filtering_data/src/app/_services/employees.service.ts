import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { EmployeeData } from '../_models/employeeData';

@Injectable()
export class EmployeesService {
    private employeeDataUrl = 'app/еmployees';

    constructor(private http: Http) { }

    getEmployees(): Observable<EmployeeData[]> {
        return this.http.get(this.employeeDataUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }

    }