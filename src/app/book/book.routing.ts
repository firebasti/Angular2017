import { Routes, RouterModule } from '@angular/router';
//import {ModuleWithProviders} from '@angular/core'
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookComponent} from "./book/book.component";


const routes: Routes = [
  {path: '', component: BookComponent, children: [{component: BookListComponent, path: ''},{component: BookDetailComponent, path: ':isbn'}]},
]

export const routing = RouterModule.forChild(routes);
