import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AuthComponent} from './pages/auth/auth.component';
import {AuthService} from "./services/auth/auth.service";

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
    HomePageComponent,
    AuthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-sharing';

  user: any = null;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.authService.getUserProfile().subscribe({
      next: data => console.log("request user", data),
      error: error => console.log("error", error)
    });
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state",auth)
        this.user=auth.user;
      }
    )
  }
}
