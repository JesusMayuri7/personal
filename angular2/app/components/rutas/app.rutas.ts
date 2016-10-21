import { Routes, RouterModule }  from '@angular/router';
import {PersonalComponent} from '../../components/personal/personal.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {AppComponent} from '../../components/app/app.component';


const appRoutes: Routes = [
    { path: 'Menu', component: MenuComponent },
    { path: '', component: PersonalComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
