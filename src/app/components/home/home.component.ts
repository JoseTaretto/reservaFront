import { Component } from '@angular/core';
import { BanerComponent } from "../baner/baner.component";
import { SearchComponent } from "../nav/search.component";
import { LocalComponent } from "../local/local.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BanerComponent, SearchComponent, LocalComponent,HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
