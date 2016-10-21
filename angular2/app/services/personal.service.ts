import { Injectable } from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonalService {
    isLoggedIn: boolean = false;
    //jwtHelper:JwtHelper = new JwtHelper();
    headers:Headers = new Headers;

    constructor(public http:Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    grabarUsuario(persona) {
        //let body = JSON.stringify({ 'nombres':'jesusito' });
        return this.http.post('api/personal',
                persona,{ headers: this.headers })
                .map(res=> res.json());
    }

    mostrarUsuarios() {
        return this.http.get('api/personal')
                .map(this.extractData).catch(this.handleError);
    }

    buscarUsuario(dni:string) {
        console.log('pasando dni '+dni);
        return this.http.get('api/personal/'+dni)
                .map(this.extractData).catch(this.handleError);
    }

    eliminarUsuario(dni:string) {
        return this.http.delete('api/personal/'+
                dni,{ headers: this.headers })
                .map(res=> res.json());
    }

    actualizarUsuario(persona) {
        console.log('pasando actualizar');
        //let body = JSON.stringify({ 'nombres':'jesusito' });
        return this.http.put('api/personal',
                persona,{ headers: this.headers })
                .map(res=> res.json());
    }
   

    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: any)
    {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
