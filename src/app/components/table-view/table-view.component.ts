import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonModel } from 'src/app/core/add-person.model';
import { PersonService } from 'src/app/core/person.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
    displayedColumns: string[] = ['name', 'age', 'role']
    dataSource: MatTableDataSource<any>
    people: PersonModel[]

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
