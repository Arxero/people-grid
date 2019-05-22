import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from './people.reducers';
import * as fromPeople from './people.reducers';


//third we make the selectors

export const selectPeopleState = createFeatureSelector<PeopleState>("people");


// export const selectPersonById = (personId: number) => createSelector(
//     selectPeopleState,
//     peopleState => peopleState.entities[personId]
// );

export const selectAllPeople = createSelector(
    //getting the complete people state
    selectPeopleState,
    //rojector function
    fromPeople.selectAll
)

export const allPeopleLoaded = createSelector(
    selectPeopleState,
    peopleState => peopleState.allPeopleLoaded
);

//selector needed for loading to work
export const selectPeopleLoading = createSelector(
    selectPeopleState,
    peopleState => peopleState.loading
)