import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import {routing} from "./book.routing";
import {BookDataService} from "./shared/book-data.service";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [BookDataService],
  declarations: [BookComponent, BookListComponent, BookDetailComponent]
})
export class BookModule { }
