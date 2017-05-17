import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {ActivatedRoute} from '@angular/router';
import {Book} from "../shared/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {

    this.route.params
      .map(params => params.isbn)
      .switchMap(isbn => this.bookData.getBookByISBN(isbn))
      .subscribe(book => {
          this.book = book;
          console.log("isbn: "+this.book.isbn);

        }

      );

  }

}
