import { Component, OnInit, Input } from '@angular/core';
import { PersonModel } from 'src/app/core/add-person.model';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    @Input('person') person: PersonModel
    constructor() { }

    ngOnInit() {
    }

}
