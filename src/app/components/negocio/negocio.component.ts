import { Component } from '@angular/core';
import { SearchComponent } from "../nav/search.component";
import { Negocio } from '../../interfaces/negocios';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { IProduct } from '../../interfaces/producto';

@Component({
  selector: 'app-negocio',
  standalone: true,
  imports: [],
  templateUrl: './negocio.component.html',
  styleUrl: './negocio.component.css'
})

export class NegocioComponent {

  negocio: Negocio | null = null;

  productos : IProduct [] = []; 

  constructor(
    private route: ActivatedRoute,
    private negociosService: NegociosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.negociosService.getNegocio(+id).subscribe({
        next: (data) => this.negocio = data,
        error: (err) => console.error('Error al cargar el negocio:', err)
      });
    }
  }
}
