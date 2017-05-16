import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookListComponent } from './book-list/book-list.component';
import {BookDataService} from "./shared/book-data.service";


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
