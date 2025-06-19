import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-add-bock',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton
  ],
  templateUrl: './add-bock.html',
  styleUrl: './add-bock.scss',
})
export class AddBock {
  booksService = inject(BooksService);
  router = inject(Router);

  bookForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    author: new FormControl<string>('', [Validators.required]),
    year: new FormControl<number>(0, [Validators.required]),
    genre: new FormControl<string>('', [Validators.required]),
    pages: new FormControl<number>(0, [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
  });

  addBook() {
    this.booksService.addBook(this.bookForm.value)
    this.router.navigate(['/books']);
  }
}
