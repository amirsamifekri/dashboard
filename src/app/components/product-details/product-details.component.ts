import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/Services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private _ActivatedRoute = inject(ActivatedRoute);
  private _ProductsService = inject(ProductsService);
  id = '';
  product!: IProduct;

  ngOnInit(): void {
    this.getCategoryId();
    this.getProductDetails();
  }

  getCategoryId() {
    this._ActivatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });
    console.log(this.id); // Output: 1234567890
  }

  getProductDetails() {
    this._ProductsService.getProductById(this.id).subscribe((product) => {
      this.product = product.data;
      console.log(this.product); // Output: { _id: "1234567890", name: "Electronics", slug: "electronics", image: "/images/electronics.jpg" }
    });
  }
}
