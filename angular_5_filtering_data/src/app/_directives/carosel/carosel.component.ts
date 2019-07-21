import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Image } from '../../_models/image';

@Component({
    moduleId: module.id.toString(),
    selector: 'carousel',
    templateUrl: './carosel.component.html',
    styleUrls: ['./carosel.component.scss']
})

export class CSSCarouselComponent {
    public images = IMAGES;
}

let IMAGES: Image[] = [
    { "title": "Employees 1", "url": "../../../assets/images/picture1.jpg" },
    { "title": "Employees 2", "url": "../../../assets/images/picture2.jpg" },
    { "title": "Employees 3", "url": "../../../assets/images/picture3.jpg" },
    { "title": "Employees 4", "url": "../../../assets/images/picture4.jpg" },
    { "title": "Employees 5", "url": "../../../assets/images/picture5.jpg" }
];