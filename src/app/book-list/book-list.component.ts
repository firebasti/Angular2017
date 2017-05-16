import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];// = [{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}];



  constructor(private bookData: BookDataService){

  }

  public asyncBookSuccess(books: Book[]) {
    console.log("success")
    this.books=books;
  }
  public asyncBookError(error: any) {
    console.log("error"+error)
    //this.books=books;
  }

  ngOnInit() {
    let subscription = this.bookData.getBooks().subscribe(result => this.asyncBookSuccess(result),error => this.asyncBookError(error));
    //this.books = bookData.getBooks();
  }

}
