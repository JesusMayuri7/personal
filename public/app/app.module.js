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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/app/app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var grid_1 = require('./components/comun/grid/grid');
var personal_component_1 = require('./components/personal/personal.component');
var grid_config_1 = require('./components/comun/grid/grid.config');
var personal_service_1 = require("./services/personal.service");
var menu_component_1 = require('./components/menu/menu.component');
var listar_component_1 = require('./components/listar/listar.component');
var actualizar_component_1 = require('./components/actualizar/actualizar.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                personal_component_1.PersonalComponent,
                grid_config_1.GridConfig, grid_1.Grid, menu_component_1.MenuComponent, listar_component_1.ListarComponent, actualizar_component_1.ActualizarComponent
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [personal_service_1.PersonalService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
