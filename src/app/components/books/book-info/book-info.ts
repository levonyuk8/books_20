import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from '../books.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-book-info',
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-info.html',
  styleUrl: './book-info.scss'
})
export class BookInfo implements OnInit {
  book!: Book;

  ngOnInit(): void {
    this.book = history.state.data
  }

}
