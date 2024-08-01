import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://foodsystem.tryasp.net';
  constructor(private _HttpClient: HttpClient) {}

  register(userData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/Auth/Register`, userData);
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/Auth/Login`, userData);
  }
}
