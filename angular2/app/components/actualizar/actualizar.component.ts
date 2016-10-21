import { Component, OnInit,Input } from '@angular/core';
//import { GridConfig } from '../comun/grid/grid.config';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector:'my-actualizar',
  moduleId:module.id,
  templateUrl:'actualizar.component.html'
})

export class ActualizarComponent implements OnInit {
 
    myform: FormGroup;
    personal:Personal[];    

    constructor(private formBuilder: FormBuilder,private personalService:PersonalService) {}

    buscarDNi(dni:string){      
      this.personalService.buscarUsuario(dni)
            .subscribe( data =>{                               
                this.personal=data;
                if (this.personal.length>0)               
                   { this.actualizarForm(); }
        },
                err => console.error(err),
                () => console.log('done'));
    }

    eliminarUsuario(dni:string){      
      this.personalService.eliminarUsuario(dni)
            .subscribe( tasks => console.log(tasks),
                err => console.error(err),
                () => this.myform.reset());
    }
  
    actualizarUsuario(value: any){
        console.log(value);
      this.personalService.actualizarUsuario(value)
            .subscribe( tasks =>{                
                console.log(tasks)},
                err => console.error(err),
                () => console.log('done'));
    }   

    iniciarForm(){
            this.myform = this.formBuilder.group({
            dni: [''],
            nombres: ['', Validators.required],
            apaterno: ['', Validators.required],
            amaterno: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['']
        });
    }

    actualizarForm(){                    
            this.myform.controls['dni'].setValue(this.personal[0]['dni']);          
            this.myform.controls['nombres'].setValue(this.personal[0]['nombres']);
            this.myform.controls['apaterno'].setValue(this.personal[0]['apaterno']);
            this.myform.controls['amaterno'].setValue(this.personal[0]['amaterno']);    
            this.myform.controls['direccion'].setValue(this.personal[0]['direccion']);
            this.myform.controls['telefono'].setValue(this.personal[0]['telefono']);    
    }

    ngOnInit(){       
       this.iniciarForm();        
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


