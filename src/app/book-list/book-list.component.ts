import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = ["Book1", "Book2", "Book3"];
    
  
  constructor() { }

  ngOnInit() {
  }

}
