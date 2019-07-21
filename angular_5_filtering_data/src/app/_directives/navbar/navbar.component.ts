import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private selected: boolean = true;

    constructor(private router: Router, private zone: NgZone) {}

    ngOnInit() {}

    clickEmployeesData(): void {
            this.zone.run(() => {
                this.router.navigate(['employees']);
            });
    }

    select(event) {
        event.preventDefault();
        this.selected = !this.selected;
    }

    goToHome(): void {
        if (this.router.url !== '') {
            this.zone.run(() => {
                this.router.navigate(['']);
            });
        }
    }

}
