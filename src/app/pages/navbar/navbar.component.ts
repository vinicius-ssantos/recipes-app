import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        MatToolbar
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user: any ;

  constructor(public authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state",auth)
        this.user=auth.user;
      }
    )
  }

   handleLogOut(){
    this.authService.logout();
    this.router.navigate(['/auth']);
}
}
