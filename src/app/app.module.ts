import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
<<<<<<< HEAD
import { BookListComponent } from './book-list/book-list.component';
=======
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
>>>>>>> 4b4b8b0f857eb387b6fd106a563ad0a930128f09

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
<<<<<<< HEAD
    BookListComponent,
=======
    MouseCursorComponent,
    TitleBoxComponent
>>>>>>> 4b4b8b0f857eb387b6fd106a563ad0a930128f09
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
