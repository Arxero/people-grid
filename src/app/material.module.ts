import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
    ]
})
export class MaterialModule { }