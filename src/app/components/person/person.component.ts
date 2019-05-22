import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/core/person.model';
import { PersonService } from 'src/app/core/person.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    @Input('person') person: Person

    constructor(private personService: PersonService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    deletePerson(id: string) {
        if (confirm(`DELETE selected person?`)) {
            this.personService.deletePerson(id).subscribe(() => {
                this.snackBar.open('Person Deleted Successfully', 'CLOSE', {
                    duration: 2000
                })
            })
        }
    }

}
