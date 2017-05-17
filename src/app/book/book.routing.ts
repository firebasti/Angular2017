import { Routes, RouterModule } from '@angular/router';
//import {ModuleWithProviders} from '@angular/core'
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookComponent} from "./book/book.component";
import {BookEditComponent} from "./book-edit/book-edit.component";


const routes: Routes = [
  {path: '', component: BookComponent, children: [
    {component: BookListComponent, path: ''},
    {component: BookDetailComponent, path: ':isbn'},
    {component: BookEditComponent, path: ':isbn/edit'}
  ]},
]

export const routing = RouterModule.forChild(routes);
