import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { TableViewComponent } from './components/table-view/table-view.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'table-view', component: TableViewComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
