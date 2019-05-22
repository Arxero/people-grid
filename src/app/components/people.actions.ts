import { Action } from '@ngrx/store';
import { Person } from '../core/person.model';

//we first make actions from the cli command ng g action components/people

export enum PeopleActionTypes {
    //action----------/origin------------/event
    PeopleRequested = '[View People Page] People Requested',
    PeopleLoaded = '[People API] People Loaded',
}

//people actions
export class PeopleRequested implements Action {
    readonly type = PeopleActionTypes.PeopleRequested;
}

export class PeopleLoaded implements Action {
    readonly type = PeopleActionTypes.PeopleLoaded;
    constructor(public payload: { people: Person[] }) { }
}



export type PeopleActions = PeopleRequested | PeopleLoaded;
