import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './book/book.component';
import {routing} from "./book.routing";
import {BookDataService} from "./shared/book-data.service";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [BookDataService],
  declarations: [BookComponent, BookListComponent, BookDetailComponent, BookEditComponent]
})
export class BookModule { }
