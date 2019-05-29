import { PersonService } from 'src/app/core/person.service';
import { BehaviorSubject } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Injectable } from '@angular/core';
import { State, SortDescriptor } from '@progress/kendo-data-query';
import { map, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class TableViewService extends BehaviorSubject<GridDataResult> {
    loading: boolean;

    constructor(private personService: PersonService) {
        super(null);
    }

    query(state: State, total?: number, sort?: SortDescriptor[]) {
        this.loading = true;
        this.personService.getPeople(state.take, state.skip, sort).pipe(
// tslint:disable-next-line: no-angle-bracket-type-assertion
            map(res => <GridDataResult>{
                data: res,
                total
            }),
            tap(() => this.loading = false),
        ).subscribe(x => super.next(x));
    }
}
