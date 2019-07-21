import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { EmployeesComponent } from './employees/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);