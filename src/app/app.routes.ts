import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { LocalFormComponent } from './components/local-form/local-form.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'negocio/:id', component: NegocioComponent},
    {path: 'ingresarlocal', component:LocalFormComponent },
    {path: '**', redirectTo: 'home', pathMatch: 'full' }  
];
