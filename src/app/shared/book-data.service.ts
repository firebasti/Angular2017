import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable()
export class BookDataService {

  constructor() { }

  public getBooks():Book[]  {
    return [{title: 'Dschungelbuch', isbn: 123}, {title: 'Angular für Anfänger', isbn: 456, pages: 137}, {title: 'Bibel', isbn: 789}];
  }
}
