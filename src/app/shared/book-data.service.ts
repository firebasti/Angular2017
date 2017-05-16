import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {Http} from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class BookDataService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public getBooks():Observable<Book[]>  {


    //return [{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}];
    //return Observable.throw([{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}]);
    //return Observable.of([{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}]);

    return this.http.get('http://localhost:4730/books')
      .map(response => response.json());
  }
}
