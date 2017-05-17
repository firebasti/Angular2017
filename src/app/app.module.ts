import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {BookDataService} from "./book/shared/book-data.service";
import {routing} from './app.routing';
import { BookDetailComponent } from './book/book-detail/book-detail.component'
import {BookModule} from "./book/book.module";



@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BookModule,
    routing
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
