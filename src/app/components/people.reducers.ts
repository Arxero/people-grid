import { Person } from "../core/person.model";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PeopleActions, PeopleActionTypes } from './people.actions';
//then second we make the reducers

//defining the people state in the store
export interface PeopleState extends EntityState<Person> {
    loading: boolean;
    allPeopleLoaded: boolean;
}

//best way to store the collection of people is map/object
//with array of ids (to preserve collection order)


export function selectUserId(a: Person): string {
    //In this case this would be optional since primary key is id
    return a._id;
  }

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
    selectId: selectUserId,
});

export const initialPeopleState: PeopleState = adapter.getInitialState({
    allPeopleLoaded: false,
    loading: true
});

//five we write our first reducer

export function peopleReducer(state = initialPeopleState, action: PeopleActions): PeopleState {
    switch (action.type) {
        case PeopleActionTypes.PeopleLoaded:
            return adapter.addAll(action.payload.people, { ...state, allPeopleLoaded: true, loading: false });

        default:
            return state
    }
}







export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();
