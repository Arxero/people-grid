import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/core/person.model';
import { PersonService } from 'src/app/core/person.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class TableViewComponent implements OnInit {
    displayedColumns: string[] = ['name', 'age', 'role']
    dataSource: MatTableDataSource<any>
    people: Person[]

    @ViewChild(MatPaginator) paginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.personService.getPeople().subscribe(data => {
            this.people = data
            this.dataSource = new MatTableDataSource(this.people)
            this.dataSource.paginator = this.paginator
            this.dataSource.sort = this.sort
        })
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
