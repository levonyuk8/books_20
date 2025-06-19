import {Component, inject, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Book} from '../books.service';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  private router = inject(Router);
  @Input() book!: Book;

  navigateToMoreInfo() {
    this.router.navigate(['/books', this.book.id], { state: { data: this.book } });
  }
}
