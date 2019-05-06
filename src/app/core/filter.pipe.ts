import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any, searchTerm: any): any {
        //when we don't search anything
        if (searchTerm == undefined) {
            return items
        }

        //when there is partial or full match of the search term
        return items.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

    }

}
