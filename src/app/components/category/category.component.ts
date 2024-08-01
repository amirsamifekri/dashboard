import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/Services/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SearchPipe, FormsModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  private _CategoriesService = inject(CategoriesService);
  categories: ICategory[] = [];
  searchText = '';

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._CategoriesService.getCategories().subscribe({
      next: (value) => {
        console.log(value);
        this.categories = value.data;
      },
      error: (error) => console.log(error),
    });
  }
}
