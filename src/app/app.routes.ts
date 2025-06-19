import {Routes} from '@angular/router';
import {Books} from './components/books/books';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: Books,
  },
  {
    path: 'add-book',
    loadComponent: () => import('./components/books/add-bock/add-bock').then(c => c.AddBock)
  },
  {
    path: 'books/:id',
    loadComponent: () => import('./components/books/book-info/book-info').then( c => c.BookInfo)},
];
