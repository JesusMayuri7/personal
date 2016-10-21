import {Component, Input, OnInit} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    template: `
<table class="table table-striped">
    <tr>
        <td *ngFor="let col of columns"><a (click)="sort(col.valor)">{{col.columna}}</a></td>
    </tr>
    <tr *ngFor="let row of rows">
        <td *ngFor="let col of columns">{{row[col.valor]}}</td>
    </tr>
</table>`
})

export class Grid implements OnInit {

    @Input() columns:Array<Column>;
    @Input() rows:Array<any>;

    @Input() name:string;

    sorter = new Sorter();

    sort(key:string){
        this.sorter.sort(key, this.rows);
    }

    ngOnInit(){
        console.log(this.name);
    }
}