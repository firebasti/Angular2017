import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core'
import {BookListComponent} from "./book-list/book-list.component";
import {InfoBoxComponent} from "./info-box/info-box.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";


const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BookListComponent},
  {path: 'books/:isbn', component: BookDetailComponent},
  {path: '**',component: InfoBoxComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
