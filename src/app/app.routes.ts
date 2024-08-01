import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // blank
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (c) => c.BlankLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'category', pathMatch: 'full' },
      {
        path: 'category',
        loadComponent: () =>
          import('./components/category/category.component').then(
            (c) => c.CategoryComponent
          ),
        title: 'Categories',
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./components/product/product.component').then(
            (c) => c.ProductComponent
          ),
      },
      {
        path: 'category-details/:id',
        loadComponent: () =>
          import(
            './components/category-details/category-details.component'
          ).then((c) => c.CategoryDetailsComponent),
        title: 'Category Details',
      },
      {
        path: 'product-details/:id',
        loadComponent: () =>
          import('./components/product-details/product-details.component').then(
            (c) => c.ProductDetailsComponent
          ),
        title: 'Product Details',
      },
    ],
  },
  // auth
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (c) => c.LoginComponent
          ),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'Register',
      },
    ],
  },
  // wild card
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
