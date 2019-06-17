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
import { PersonComponent } from './components/person/person.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './components/people.effects';
import { peopleReducer } from './components/people.reducers';
import { Store } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

//import { PersonResolver } from './core/person.resolver';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AddComponent,
        EditComponent,
        TableViewComponent,
        FilterPipe,
        PersonComponent,
        FormBuilderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        GridModule,
        EffectsModule.forRoot([]),//making possible to use effects in the project
        StoreModule.forRoot(reducers, { metaReducers }),//add by ng g store AppState --root --module app.module.ts
        StoreModule.forFeature('people', peopleReducer),//importing the reducrer, added by ng g reducer components/people --module app.module.ts
        EffectsModule.forFeature([PeopleEffects]),//importing the effects, added by ng g effect components/people --module app.module.ts
        !environment.production ? StoreDevtoolsModule.instrument() : [],//dev tools
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' })//dev tools timetravel

    ],
    providers: [
        PersonService,
       // PersonResolver,
        {provide: RouterStateSerializer, useClass: CustomSerializer}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
