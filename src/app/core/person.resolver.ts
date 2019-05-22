import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { tap, filter, first } from "rxjs/operators";
import { AppState } from '../reducers';
import { Person } from './person.model';
import { PersonService } from './person.service';
// import { selectPersonById } from '../components/people.selectors';
// import { PersonRequested } from '../components/people.actions';



// @Injectable()
// export class PersonResolver implements Resolve<Person> {

//     constructor(
//         private personService: PersonService,
//         private store: Store<AppState>) {

//     }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
//         let personId = route.params['id'];
//         //return this.coursesService.findCourseById(courseId);

//         //we are quering/asking the store if there is such course in there
//         return this.store.pipe(
//             select(selectPersonById(personId)),

//             //handling when course is not present in the store
//             tap(person => {
//                 if (!person) {
//                     this.store.dispatch(new PersonRequested({ personId }));
//                 }
//             }),
//             //what happens if the course is not yet avaiable to the store
//             filter(person => !!person),
//             first()
//         )
//     }

// }