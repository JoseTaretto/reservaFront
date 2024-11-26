import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { AgregarLocalComponent } from '../agregar-local/agregar-local.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, AgregarLocalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public urlLocal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/negocio') {
      this.urlLocal = true;
    } else {
      this.urlLocal = false;
    }
  }

}
