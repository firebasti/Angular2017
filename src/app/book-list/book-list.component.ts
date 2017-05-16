import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}];

  constructor(private bookData: BookDataService){
    this.books = bookData.getBooks();
  }

  ngOnInit() {
  }

}
