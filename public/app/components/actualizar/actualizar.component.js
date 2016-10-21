"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { GridConfig } from '../comun/grid/grid.config';
var forms_1 = require('@angular/forms');
var personal_service_1 = require('../../services/personal.service');
var ActualizarComponent = (function () {
    function ActualizarComponent(formBuilder, personalService) {
        this.formBuilder = formBuilder;
        this.personalService = personalService;
    }
    ActualizarComponent.prototype.buscarDNi = function (dni) {
        var _this = this;
        this.personalService.buscarUsuario(dni)
            .subscribe(function (data) {
            _this.personal = data;
            if (_this.personal.length > 0) {
                _this.actualizarForm();
            }
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ActualizarComponent.prototype.eliminarUsuario = function (dni) {
        var _this = this;
        this.personalService.eliminarUsuario(dni)
            .subscribe(function (tasks) { return console.log(tasks); }, function (err) { return console.error(err); }, function () { return _this.myform.reset(); });
    };
    ActualizarComponent.prototype.actualizarUsuario = function (value) {
        console.log(value);
        this.personalService.actualizarUsuario(value)
            .subscribe(function (tasks) {
            console.log(tasks);
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ActualizarComponent.prototype.iniciarForm = function () {
        this.myform = this.formBuilder.group({
            dni: [''],
            nombres: ['', forms_1.Validators.required],
            apaterno: ['', forms_1.Validators.required],
            amaterno: ['', forms_1.Validators.required],
            direccion: ['', forms_1.Validators.required],
            telefono: ['']
        });
    };
    ActualizarComponent.prototype.actualizarForm = function () {
        this.myform.controls['dni'].setValue(this.personal[0]['dni']);
        this.myform.controls['nombres'].setValue(this.personal[0]['nombres']);
        this.myform.controls['apaterno'].setValue(this.personal[0]['apaterno']);
        this.myform.controls['amaterno'].setValue(this.personal[0]['amaterno']);
        this.myform.controls['direccion'].setValue(this.personal[0]['direccion']);
        this.myform.controls['telefono'].setValue(this.personal[0]['telefono']);
    };
    ActualizarComponent.prototype.ngOnInit = function () {
        this.iniciarForm();
    };
    ActualizarComponent = __decorate([
        core_1.Component({
            selector: 'my-actualizar',
            moduleId: module.id,
            templateUrl: 'actualizar.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, personal_service_1.PersonalService])
    ], ActualizarComponent);
    return ActualizarComponent;
}());
exports.ActualizarComponent = ActualizarComponent;
