import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductoComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full' }
    
];
