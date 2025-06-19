import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  pages: number;
  image?: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly API_URL = './assets/books.json';

  constructor(private http: HttpClient) {
  }

  addBook(data: any) {
    console.log('post on api', data);
  }

  getBooksBySearchValue(value?: string | null) {
    return this.http.get<Book[]>(this.API_URL).pipe(
      map(books => this.filterBooks(books, value)),
    );
  }

  private filterBooks(books: Book[], searchTerm?: string | null) {
    if (!searchTerm) {
      return books;
    }
    return books.filter(book => book.title.includes(searchTerm) || book.author.includes(searchTerm))
  }

}
