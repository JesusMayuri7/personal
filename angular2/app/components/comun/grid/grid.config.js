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
var column_1 = require('./column');
var personal_service_1 = require('../../../services/personal.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var GridConfig = (function () {
    function GridConfig(personalService) {
        this.personalService = personalService;
        this.loading = false;
        console.log('iniciando componente');
    }
    GridConfig.prototype.ngOnInit = function () {
        // console.log('este es '+this.IdReport);
        //this.people = this.getPeople();
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    };
    GridConfig.prototype.GetData = function (fecha) {
        var _this = this;
        this.loading = true;
        this.personalService.autenticarGet(fecha['edad'], fecha['anio']).subscribe(function (data) {
            console.log('incio aut');
            console.log(data['data']);
            console.log('fin aut');
            _this.reporte = data['data'];
            _this.descripcion = data['descripcion'] + ' - (' + data['anio'] + ')';
            _this.loading = false;
        }, function (error) {
            _this.loading = true;
            console.log(error);
        });
    };
    GridConfig.prototype.ngOnDestroy = function () {
    };
    GridConfig.prototype.getPeople = function () {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    };
    GridConfig.prototype.getColumns = function () {
        return [
            new column_1.Column('Establecimiento', 'Establecimiento'),
            new column_1.Column('Ene', 'Enero'),
            new column_1.Column('Feb', 'Febrero'),
            new column_1.Column('Mar', 'Marzo'),
            new column_1.Column('Abr', 'Abril'),
            new column_1.Column('May', 'Mayo'),
            new column_1.Column('Jun', 'Junio'),
            new column_1.Column('Jul', 'Julio'),
            new column_1.Column('Ago', 'Agosto'),
            new column_1.Column('Sep', 'Septiembre'),
            new column_1.Column('Cot', 'Octubre'),
            new column_1.Column('Nov', 'Noviembre'),
            new column_1.Column('Dic', 'Diciembre'),
            new column_1.Column('Total', 'Total')
        ];
    };
    GridConfig = __decorate([
        core_1.Component({
            selector: 'grid-demo',
            template: "\n    <div *ngIf=\"loading\">\n    <img  height=\"125px\" width=\"125px\" src=\"img/loading1.gif\" style=\"position: absolute; left: 50%;\n top: 80%;\">\n    </div>\n    <div *ngIf=\"!loading\">\n    <div class=\"panel panel-info\">\n  <div class=\"panel-heading text-center text-primary\">{{descripcion}}</div>\n  <div class=\"panel panel-body\">\n  <grid name=\"person grid\" [rows]=\"reporte\" [columns]=\"columns\"></grid>\n</div>\n</div>    \n    </div>"
        }), 
        __metadata('design:paramtypes', [personal_service_1.PersonalService])
    ], GridConfig);
    return GridConfig;
}());
exports.GridConfig = GridConfig;
//# sourceMappingURL=grid.config.js.map