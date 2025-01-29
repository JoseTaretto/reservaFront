import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { Negocio } from '../../interfaces/negocios';  // Importa la interfaz
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent implements OnInit {

  public negocios: Negocio[] = [];
  public negocio: Negocio | undefined;

  private negociosService = inject (NegociosService);
  
  selectedNegocio: Negocio | null = null;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.negociosService.getNegocios().subscribe(data => {
      this.negocios = data;
      console.log(this.negocios)
    });    
  }
  
  irLocal(id: number): void {
    this.router.navigate(['/negocio', id]); // Navegar al componente NegocioComponent con el ID
  }
  
}
