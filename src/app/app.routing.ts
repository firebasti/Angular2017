import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core'
import {BookListComponent} from "./book-list/book-list.component";


const routes: Routes = [{
  path: 'books',
  component: BookListComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
