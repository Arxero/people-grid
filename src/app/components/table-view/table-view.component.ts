import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { TableViewService } from './table-view.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/core/person.model';
import { PersonService } from 'src/app/core/person.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { State, SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    // paging properties
    total: number;
    view: Observable<GridDataResult>;
    state: State = {
        skip: 0,
        take: 3,
    };

    // sort properties
    multiple = false;
    allowUnsort = true;
    sort: SortDescriptor[] = [{
        field: '',
        dir: 'asc'
    }];

    constructor(
        private tableViewService: TableViewService,
        private personService: PersonService) {
        this.view = tableViewService;

    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.personService.getCollectionTotal().subscribe(data => {
            this.total = +data['count'];

            if (this.sort[0].field) {
                this.tableViewService.query(this.state, this.total, this.sort);
            } else {
                this.tableViewService.query(this.state, this.total);
            }
        });
    }

    onDataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.loadData()
    }

    onSortChange(sort: SortDescriptor[]) {
        this.sort = sort;
        this.loadData();
    }
}

