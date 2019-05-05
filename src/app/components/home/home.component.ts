import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/person.service';
import { PersonModel } from 'src/app/core/add-person.model';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    people: PersonModel[]

    constructor(
        private personService: PersonService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.personService.getPeople().subscribe(data => {
            this.people = data
        })
    }

    deletePerson(id: string) {
        if (confirm(`DELETE selected person?\nAre you sure about that?`)) {
            this.personService.deletePerson(id).subscribe(() => {
                this.personService.getPeople().subscribe(data => {
                    this.people = data
                    this.snackBar.open('Person Deleted Successfully', 'CLOSE', {
                        duration: 2000
                    })
                })
            })

        }
    }



}
