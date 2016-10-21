import { Component, OnInit,Input } from '@angular/core';
//import { GridConfig } from '../comun/grid/grid.config';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector:'my-personal',
  moduleId:module.id,
  templateUrl:'personal.component.html',
  styleUrls:['personal.component.css']
})

export class PersonalComponent implements OnInit {
 
    myform: FormGroup;

    constructor(private formBuilder: FormBuilder,private personalService:PersonalService) {}
  
    submitForm(value: any){
      this.personalService.grabarUsuario(value)
            .subscribe( tasks =>{                
                console.log(tasks)},
                err => console.error(err),
                () => this.myform.reset());
    }   

    ngOnInit(){
        this.myform = this.formBuilder.group({
            dni: ['', Validators.required],
            nombres: ['', Validators.required],
            apaterno: ['', Validators.required],
            amaterno: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['']
        });
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


