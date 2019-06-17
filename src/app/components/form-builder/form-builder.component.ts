import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {


    todo = [
        {
            name: 'Get to work',
            id: 'ksadjf234532',
            type: 2
        },
        {
            name: 'Pick up groceries',
            id: 'ksadjf234532',
            type: 3
        },
        {
            name: 'Go home',
            id: 'ksadjf234532',
            type: 1
        },
        {
            name: 'Fall asleep',
            id: 'ksadjf234532',
            type: 4
        },
    ];

    done = [];


    constructor() { }

    ngOnInit() {
    }



    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

}
