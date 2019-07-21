import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], firstName: string, surname: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!firstName || !surname || !value) {
            return items;
        }

       return items.filter(singleItem => singleItem[firstName].toLowerCase().includes(value.toLowerCase()) ||
                            singleItem[surname].toLowerCase().includes(value.toLowerCase()));
    }
}