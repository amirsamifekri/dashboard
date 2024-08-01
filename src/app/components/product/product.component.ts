import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { FormsModule } from '@angular/forms';
import { SearchProductsPipe } from '../../core/pipes/search-products.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SearchProductsPipe, FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  private _ProductsService = inject(ProductsService);
  products: IProduct[] = [];
  searchText = '';

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._ProductsService.getProducts().subscribe({
      next: (products) => {
        this.products = products.data;
        console.log(this.products);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
