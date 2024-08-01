import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/Services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss',
})
export class CategoryDetailsComponent implements OnInit {
  private _ActivatedRoute = inject(ActivatedRoute);
  private _CategoriesService = inject(CategoriesService);
  id = '';
  category!: ICategory;

  ngOnInit(): void {
    this.getCategoryId();
    this.getCategoryDetails();
  }

  getCategoryId() {
    this._ActivatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });
    console.log(this.id); // Output: 1234567890
  }

  getCategoryDetails() {
    this._CategoriesService.getCategoryById(this.id).subscribe((category) => {
      this.category = category.data;
      console.log(this.category); // Output: { _id: "1234567890", name: "Electronics", slug: "electronics", image: "/images/electronics.jpg" }
    });
  }
}
