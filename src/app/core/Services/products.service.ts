import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'https://ecommerce.routemisr.com/api/v1';

  constructor(private _HttpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products`);
  }

  getProductById(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products/${id}`);
  }
}
