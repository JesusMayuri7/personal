import { Component, OnInit, OnDestroy } from '@angular/core';
import {Column} from './column';
import {PersonalService} from '../../../services/personal.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector:'grid-config',
    template:`
    <div *ngIf="loading">
    <img  height="125px" width="125px" src="img/loading1.gif" style="position: absolute; left: 50%;
 top: 80%;">
    </div>
    <div *ngIf="!loading">
    <div class="panel panel-info">
  <div class="panel-heading text-center text-primary">{{descripcion}}</div>
  <div class="panel panel-body">
  <grid name="person grid" [rows]="reporte" [columns]="columns"></grid>
</div>
</div>    
    </div>`
})

export class GridConfig implements OnInit, OnDestroy {
    //@Input() IdReport:string;
    //@Input() IdAnio:string;
    people: Array<Person>;
    columns: Array<Column>;
    reporte: Array<String>;
    descripcion:string;
    loading:boolean=false;

    constructor(private personalService:PersonalService){
      console.log('iniciando componente');
    }

    ngOnInit(){
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    }

    GetData(fecha:any) {
   /*     this.loading=true;
        this.personalService.autenticarGet(fecha['edad'],fecha['anio']).subscribe(
            data => {
                console.log('incio aut');
                console.log(data['data']);
                console.log('fin aut');
                this.reporte = data['data'];
                
                this.descripcion = data['descripcion']+' - ('+data['anio']+')';
                this.loading=false;
            },
            error=> {
                this.loading=true;
                console.log(error); }
        );*/
    }


    ngOnDestroy(){

    }


    getPeople(): Array<Person> {
        return [
            {firstName:'Joe',lastName:'Jackson',age:20},
            {firstName:'Peter',lastName:'Smith',age:30},
            {firstName:'Jane',lastName:'Doe',age:50},
            {firstName:'Tim',lastName:'Smith',age:80}
        ];
    }

    getColumns(): Array<Column> {
        return [
            new Column('Establecimiento','Establecimiento'),
            new Column('Ene','Enero'),
            new Column('Feb','Febrero'),
            new Column('Mar','Marzo'),
            new Column('Abr','Abril'),
            new Column('May','Mayo'),
            new Column('Jun','Junio'),
            new Column('Jul','Julio'),
            new Column('Ago','Agosto'),
            new Column('Sep','Septiembre'),
            new Column('Cot','Octubre'),
            new Column('Nov','Noviembre'),
            new Column('Dic','Diciembre'),
            new Column('Total','Total')
        ];
    }
}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
}

interface RptAnual {
    descripcion:string;
    enero:number;
    febrero:number;
    marzo:number;
    abril:number;
    mayo:number;
    junio:number;
    julio:number;
    agosto:number;
    setiembre:number;
    octubre:number;
    noviembre:number;
    diciembre:number;
    total:number;
}