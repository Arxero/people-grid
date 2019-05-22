import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/core/person.model';
import { PersonService } from 'src/app/core/person.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    personModel: Person
    image: string
    addPersonForm: FormGroup

    roles: Array<string> = [
        'System Administrator',
        'Moderator',
        'Customer Support',
        'Founder',
        'Co-Founder',
        'UI engineer & designer'

    ]

    // urlFormControl = new FormControl('', [
    //     Validators.required,
    //     this.urlValidator,
    // ]);

    // nameFormControl = new FormControl('', [
    //     Validators.required,
    // ]);

    // ageFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.min(18),
    //     Validators.max(80)
    // ])
    // roleFormControl = new FormControl('', [
    //     Validators.required
    // ]);

    // addPersonForm = new FormGroup({
    //     imageUrl: this.urlFormControl,
    //     name: this.nameFormControl,
    //     age: this.ageFormControl,
    //     role: this.roleFormControl
    // })


    constructor(
        private personService: PersonService,
        private router: Router,
        private snackBar: MatSnackBar,
        private formBulder: FormBuilder) {
    }

    ngOnInit() {
        this.addPersonForm = this.formBulder.group({
            imageUrl: ['', [
                Validators.required,
                Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/)]
            ],
            name: ['', [Validators.required]],
            age: [null, [
                Validators.required,
                Validators.min(18),
                Validators.max(80)]
            ],
            role: ['', [Validators.required]]
        })

        this.addPersonForm.valueChanges.subscribe(data => {
            this.image = data.imageUrl
        })
    }

    get imageUrl() {
        return this.addPersonForm.get('imageUrl')
    }
    get name() {
        return this.addPersonForm.get('name')
    }
    get age() {
        return this.addPersonForm.get('age')
    }
    get role() {
        return this.addPersonForm.get('role')
    }


    onSubmit(formData) {
        this.personService.addPerson(formData).subscribe(() => {
            this.router.navigate(['/'])
            this.snackBar.open('Person Added Successfully', 'CLOSE', {
                duration: 2000
            })
        })
    }



    // urlValidator(control) {
    //     let url = control.value
    //     let urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    //     if (urlRegex.test(url)) {
    //         return null
    //     } else {
    //         return { url }
    //     }
    // }
}




