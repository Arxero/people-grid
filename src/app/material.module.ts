import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';


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
    MatExpansionModule,
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
        DragDropModule,
        MatExpansionModule,
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
        DragDropModule,
        MatExpansionModule,
    ]
})
export class MaterialModule { }