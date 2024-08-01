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
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _Router = inject(Router);
  private _AuthService = inject(AuthService);
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{1,}[0-9]{6,}$/),
    ]),
    gender: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[01]$/),
    ]),
    role: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[01234]$/),
    ]),
  });
  // method
  handleForm() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (value) => {
          console.log(value);
          this._Router.navigate(['/login']);
        },
        error: (error) => {
          console.error(error.error.detail);
        },
      });
    }
  }
}
