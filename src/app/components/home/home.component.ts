import { Component } from '@angular/core';
import { BanerComponent } from "../baner/baner.component";
import { SearchComponent } from "../nav/search.component";
import { LocalComponent } from "../locales/local.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, LocalComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
