import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/person.service';
import { Person } from 'src/app/core/person.model';
import { FilterPipe } from '../../core/filter.pipe';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, finalize } from "rxjs/operators";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectAllPeople, selectPeopleLoading } from '../people.selectors';
import { PeopleRequested } from '../people.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    people$: Observable<Person[]>;
    loadingSubject = new BehaviorSubject<boolean>(false);
    //loading$ = this.loadingSubject.asObservable();
    loading$: Observable<boolean>;

    constructor(
        private store: Store<AppState>) { }

    ngOnInit() {
        this.store.dispatch(new PeopleRequested());

        this.people$ = this.store.pipe(
            select(selectAllPeople)
        );
        this.loading$ = this.store.pipe(select(selectPeopleLoading));

        // this.loadingSubject.next(true);
        // this.people$ = this.personService.getPeople().pipe(
        //     finalize(() => this.loadingSubject.next(false))
        // )
    }

}
