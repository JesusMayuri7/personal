"use strict";
var router_1 = require('@angular/router');
var personal_component_1 = require('../../components/personal/personal.component');
var menu_component_1 = require('../../components/menu/menu.component');
var appRoutes = [
    { path: 'Menu', component: menu_component_1.MenuComponent },
    { path: '', component: personal_component_1.PersonalComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
