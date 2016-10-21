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
var PersonalComponent = (function () {
    function PersonalComponent(formBuilder, personalService) {
        this.formBuilder = formBuilder;
        this.personalService = personalService;
    }
    PersonalComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.personalService.grabarUsuario(value)
            .subscribe(function (tasks) {
            console.log(tasks);
        }, function (err) { return console.error(err); }, function () { return _this.myform.reset(); });
    };
    PersonalComponent.prototype.ngOnInit = function () {
        this.myform = this.formBuilder.group({
            dni: ['', forms_1.Validators.required],
            nombres: ['', forms_1.Validators.required],
            apaterno: ['', forms_1.Validators.required],
            amaterno: ['', forms_1.Validators.required],
            direccion: ['', forms_1.Validators.required],
            telefono: ['']
        });
    };
    PersonalComponent = __decorate([
        core_1.Component({
            selector: 'my-personal',
            moduleId: module.id,
            templateUrl: 'personal.component.html',
            styleUrls: ['personal.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, personal_service_1.PersonalService])
    ], PersonalComponent);
    return PersonalComponent;
}());
exports.PersonalComponent = PersonalComponent;
