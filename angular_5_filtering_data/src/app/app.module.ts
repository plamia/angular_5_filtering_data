import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// App Component and routing
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

// all Directives(sub components)
import { NavbarComponent } from './_directives/navbar/index';
import { FooterComponent } from './_directives/footer/index';
import { CSSCarouselComponent } from './_directives/carosel/index';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//all Services
import { EmployeesService, DataService } from './_services/index';

// All pages
import { HomeComponent } from './home/index';
import { EmployeesComponent } from './employees/index';

// All Pipes
import { FilterPipe } from './_pipes/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        InMemoryWebApiModule.forRoot(DataService, { delay: 600 })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EmployeesComponent,
        FilterPipe,
        CSSCarouselComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
        EmployeesService,
        DataService,
    ],
    exports: [
        FilterPipe
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }