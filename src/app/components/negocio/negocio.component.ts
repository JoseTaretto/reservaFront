import { Component } from '@angular/core';
import { SearchComponent } from "../nav/search.component";

@Component({
  selector: 'app-negocio',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './negocio.component.html',
  styleUrl: './negocio.component.css'
})
export class NegocioComponent {

}
