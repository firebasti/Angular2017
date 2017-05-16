import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class BookDataService {

  constructor() { }

  public getBooks():Observable<Book[]>  {


    //return [{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}];
    //return Observable.throw([{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}]);
    return Observable.of([{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}]);
  }
}
