import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Book} from './book';
import { BookChange } from './book-change';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serviceUrl = 'http://localhost:8081/books-log';

  constructor(private http: HttpClient) { }

  async getBookChanges() {
    return await this.http.get<Book[]>(this.serviceUrl).toPromise();
  }
}
