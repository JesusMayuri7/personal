import {Component,OnInit} from '@angular/core';
import { PersonalService } from '../../services/personal.service';

@Component({
    moduleId:module.id,
    selector:'my-listar',
    templateUrl:'listar.component.html'
})

export class ListarComponent {
     personal:Personal[];  
    constructor(private personalService:PersonalService){      
    }

     mostrarUser() {
        this.personalService.mostrarUsuarios()
            .subscribe( tasks => this.personal=tasks ,
                err => console.error(err),
                () => console.log('done'));
    }
    
    ngOnInit() {
        this.mostrarUser();
    }
}

interface Personal {
    id?:number;
    dni:string;
    nombres:string;
    apaterno:string;
    amaterno:string;
    direccion:string;
    telefono?:string;
}