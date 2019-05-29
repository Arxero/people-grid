import { SortDescriptor } from '@progress/kendo-data-query';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = 'https://baas.kinvey.com/appdata/kid_Bk0m9gooN/people'
const APP_KEY = 'kid_Bk0m9gooN'
const APP_SECRET = '6cb62731154241dbb20650c9bd212ab2'
const APP_MASTER_SECRET = '8cc3590e93c54dccb8adef661351f86e'


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_MASTER_SECRET)
    })
}


@Injectable({
    providedIn: 'root'
})

export class PersonService {
    constructor(private http: HttpClient) { }

    addPerson(body: Person) {
        return this.http.post(URL, body, httpOptions);
    }

    getPeople(limit?: number, skip?: number, sort?: SortDescriptor[]): Observable<Person[]> {
        if (limit || skip) {
            if (sort && sort[0].dir) {
                switch (sort[0].dir) {
                    case 'asc':
                        return this.http.get<Person[]>(`${URL}?query={}&sort={"${sort[0].field}": 1}&limit=${limit}&skip=${skip}`, httpOptions);
                    case 'desc':
                        return this.http.get<Person[]>(`${URL}?query={}&sort={"${sort[0].field}": -1}&limit=${limit}&skip=${skip}`, httpOptions);
                    default:
                        return this.http.get<Person[]>(URL, httpOptions);
                }

            }
            return this.http.get<Person[]>(`${URL}?query={}&limit=${limit}&skip=${skip}`, httpOptions)
        }
        return this.http.get<Person[]>(URL, httpOptions);
    }
    getCollectionTotal(collection?: string) {
        return this.http.get<object>(`${URL}/_count`, httpOptions)
    }

    getPerson(id: string) {
        return this.http.get<Person>(URL + '/' + id, httpOptions);
    }

    editPerson(id: string, body: Person) {
        return this.http.put(URL + '/' + id, body, httpOptions);
    }

    deletePerson(id: string) {
        return this.http.delete(URL + '/' + id, httpOptions);
    }

}