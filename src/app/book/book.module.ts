import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import {routing} from "./book.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BookComponent]
})
export class BookModule { }
