import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Grid} from './components/comun/grid/grid';
import { PersonalComponent } from './components/personal/personal.component';
import { GridConfig } from './components/comun/grid/grid.config';
import {PersonalService} from "./services/personal.service";
import { MenuComponent } from './components/menu/menu.component';
import { ListarComponent } from './components/listar/listar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonalComponent,
        GridConfig,Grid,MenuComponent,ListarComponent,ActualizarComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule ],
    bootstrap:    [AppComponent],
    providers:    [PersonalService]
})
export class AppModule {

}
