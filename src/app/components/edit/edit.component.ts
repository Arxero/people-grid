import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/core/person.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    personModel: Person
    image: string
    editPersonForm : FormGroup

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private formBulder: FormBuilder
    ) { }

    ngOnInit() {
        this.editPersonForm = this.formBulder.group({})

        this.personService.getPerson(this.route.snapshot.params['id']).subscribe(data => {
            this.personModel = data

            this.editPersonForm = this.formBulder.group({
                imageUrl: [this.personModel.imageUrl, [
                    Validators.required,
                    Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/)]
                ],
                name: [this.personModel.name, [Validators.required]],
                age: [this.personModel.age, [
                    Validators.required,
                    Validators.min(18),
                    Validators.max(80)]
                ],
                role: [this.personModel.role, [Validators.required]]
            })

            this.editPersonForm.valueChanges.subscribe(data => {
                this.image = data.imageUrl
            })
            
        })
    }

    get imageUrl() {
        return this.editPersonForm.get('imageUrl')
    }
    get name() {
        return this.editPersonForm.get('name')
    }
    get age() {
        return this.editPersonForm.get('age')
    }
    get role() {
        return this.editPersonForm.get('role')
    }

    onSubmit(formData) {
        this.personService.editPerson(this.route.snapshot.params['id'], formData).subscribe(() => {
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

    // urlValidator(control: FormControl) {
    //     let url = control.value
    //     let urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    //     if (urlRegex.test(url)) {
    //         return null
    //     } else {
    //         return { url }
    //     }
    // }

}
