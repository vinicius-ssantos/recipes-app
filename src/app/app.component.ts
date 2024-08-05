import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-sharing';
}
