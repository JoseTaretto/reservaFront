import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NegocioComponent } from './components/negocio/negocio.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'negocio', component: NegocioComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full' }
    
];
