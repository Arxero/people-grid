import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

//Components
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { PersonService } from './core/person.service';
import { EditComponent } from './components/edit/edit.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { FilterPipe } from './core/filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AddComponent,
        EditComponent,
        TableViewComponent,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [PersonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
