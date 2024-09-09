import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from "./components/baner/baner.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./components/home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BanerComponent, FooterComponent, HttpClientModule, HomeComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reserveygo';
}
