import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from '../../services/auth/auth.service';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {


  isRegister: boolean = false;
  constructor(public authService:AuthService ) {

   }


  registerationForm= new FormGroup({
    fullName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6)]),

  });

  loginForm= new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])

  });

  handleRegister(){
    console.log("Register",this.registerationForm.value)

    this.authService.register(this.registerationForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("Sign up success ", response);

      }
      
    })
  }
  handleLogin(){
    console.log("Login ",this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("login success ", response);

      }

    })
  }

  toggleForm() {
    this.isRegister = !this.isRegister;
  }


}
