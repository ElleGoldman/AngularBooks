import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import books from '../_files/books'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() title:string | undefined;

  constructor() { }

  public allBooks = books

  ngOnInit(): void {
  }

  @Output() bookClicked = new EventEmitter<string>();

  handleBookClick(value: string) {
    this.bookClicked.emit(value);
  }

}
