import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeData } from '../_models/employeeData';
import { EmployeesService } from '../_services/employees.service';
import { FilterPipe } from '../_pipes/filter.pipe';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'employees.component.html',
    styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
    private allEmployees = [];
    private active: any;
    private isShowed: boolean = true;
    private surname = [];
    public filteredList = [];
    public elementRef;
    public query = '';

    constructor(private router: Router, private employeesService: EmployeesService) {}

    ngOnInit() {
        //get employees data
        this.employeesService.getEmployees()
                .subscribe(data => {
                    this.allEmployees = data;
                    this.filteredList = this.allEmployees;
            });
    }

    ngAfterViewInit() {}

    select(item) {
        this.filteredList = [item];
    }

     clearFilter(event) {
         this.isShowed = true;
         return this.filteredList = this.allEmployees;

    }

     hideSuggestions(event) {
        this.isShowed = false;
    }
}
