import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _Router = inject(Router);
  private _AuthService = inject(AuthService);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{1,}[0-9]{6,}$/),
    ]),
  });
  // method
  handleForm() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (value) => {
          console.log(value);
          localStorage.setItem('token', value.token);
          this._Router.navigate(['/category']);
        },
        error: (error) => {
          console.error(error.error.detail);
        },
      });
    }
  }
}
