import { Component } from '@angular/core';
import { BanerComponent } from "../baner/baner.component";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [BanerComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
