import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  public negocios: Negocio[] = [];  // Usa la interfaz Negocio[]

  private empleadoNegociosServiceService = inject (NegociosService);

  ngOnInit(): void {
    this.empleadoNegociosServiceService.getNegocios().subscribe(data => {
      this.negocios = data;
    });
    console.log(this.negocios)
  }

  constructor() { }

}
