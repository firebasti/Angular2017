import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }


  book: Book;

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
