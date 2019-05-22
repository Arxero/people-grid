import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
//then fourth we make effects
import { PersonService } from '../core/person.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import {PeopleActionTypes, PeopleRequested, PeopleLoaded } from './people.actions';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { allPeopleLoaded } from './people.selectors';


@Injectable()
export class PeopleEffects {
    constructor(
        private actions$: Actions,
        private personService: PersonService,
        private store: Store<AppState>
    ) { }

    @Effect()
    loadAllCourses$ = this.actions$.pipe(
        ofType<PeopleRequested>(PeopleActionTypes.PeopleRequested),
        withLatestFrom(this.store.pipe(select(allPeopleLoaded))),
        filter(([action, allPeopleLoaded]) => !allPeopleLoaded),
        mergeMap(() => this.personService.getPeople()),
        map(people => new PeopleLoaded({ people }))
    );


}