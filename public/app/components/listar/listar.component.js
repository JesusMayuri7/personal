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
var personal_service_1 = require('../../services/personal.service');
var ListarComponent = (function () {
    function ListarComponent(personalService) {
        this.personalService = personalService;
    }
    ListarComponent.prototype.mostrarUser = function () {
        var _this = this;
        this.personalService.mostrarUsuarios()
            .subscribe(function (tasks) { return _this.personal = tasks; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ListarComponent.prototype.ngOnInit = function () {
        this.mostrarUser();
    };
    ListarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-listar',
            templateUrl: 'listar.component.html'
        }), 
        __metadata('design:paramtypes', [personal_service_1.PersonalService])
    ], ListarComponent);
    return ListarComponent;
}());
exports.ListarComponent = ListarComponent;
