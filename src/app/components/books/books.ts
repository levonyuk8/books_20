import {ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation} from '@angular/core';
import {BooksService} from './books.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule} from '@angular/forms';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs';
import {BookCard} from './book-card/book-card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormField, MatInput} from '@angular/material/input';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatGridListModule,
    ReactiveFormsModule,
    BookCard,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormField,
    MatInput
  ],
  templateUrl: './books.html',
  styleUrl: './books.scss',
  encapsulation: ViewEncapsulation.None
})
export class Books {
  booksService = inject(BooksService);
  router = inject(Router);

  searchTerm = signal('');
  private searchTerm$ = toObservable(this.searchTerm);
  books = toSignal(
    this.searchTerm$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(term => this.fetchBooks(term))
    )
  );

  updateSearch(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchTerm.set(inputValue);
  }

  navigateToCreateBook() {
    this.router.navigate(['/add-book']);
  }

  private fetchBooks(term: string) {
    return this.booksService.getBooksBySearchValue(term);
  }
}
