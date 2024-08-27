import { Component } from '@angular/core';
import { BanerComponent } from "../baner/baner.component";
import { SearchComponent } from "../search/search.component";
import { LocalComponent } from "../local/local.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BanerComponent, SearchComponent, LocalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
