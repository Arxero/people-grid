import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonModel } from 'src/app/core/add-person.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    personModel: PersonModel
    image: string

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.personService.getPerson(this.route.snapshot.params['id']).subscribe(data => {
            this.personModel = data
        })
    }

    onSubmit() {
        this.personModel = this.addPersonForm.value
        this.personService.editPerson(this.route.snapshot.params['id'], this.personModel).subscribe(() => {
            this.router.navigate(['/'])
            this.snackBar.open('Person Edited Successfully', 'CLOSE', {
                duration: 2000
            })
        })

    }

    roles: Array<string> = [
        'System Administrator',
        'Moderator',
        'Customer Support',
        'Founder',
        'Co-Founder',
        'UI engineer & designer'

    ]

    urlFormControl = new FormControl('', [
        Validators.required,
        this.urlValidator,
    ]);

    nameFormControl = new FormControl('', [
        Validators.required,
    ]);

    ageFormControl = new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(80)
    ])
    roleFormControl = new FormControl('', [
        Validators.required
    ]);

    addPersonForm = new FormGroup({
        imageUrl: this.urlFormControl,
        name: this.nameFormControl,
        age: this.ageFormControl,
        role: this.roleFormControl
    })

    urlValidator(control: FormControl) {
        let url = control.value
        let urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
        if (urlRegex.test(url)) {
            return null
        } else {
            return { url }
        }
    }

}
