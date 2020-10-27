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

  getBookChanges(): BookChange[] {
    const bookChanges = new Array<BookChange>();

    console.log('1');

    this.http.get<Book[]>(this.serviceUrl).pipe(map(result => {
      console.log("call finished");
      for (const book of result) {
        const bookChange = new BookChange();
        bookChange.timestamp = book.timestamp;
        bookChange.id = book.id
        bookChange.revision = book.revision
        switch(book.action){
          case 'insert':
            bookChange.description = 'Book has been INSERTED into the database';
            break;
          case 'delete':
            bookChange.description = 'Book has been DELETED from the database';
            break;
          case 'update':
            bookChange.description = 'Book has been UPDATED. '
  
            const previousRevision = result.find(previous => (previous.id === book.id) && (previous.revision === (book.revision - 1)))
  
            if(book.title != previousRevision.title){
              bookChange.description += 'TITLE has been changed from "' + previousRevision.title + '" to "' + book.title + '". ';
            }if(book.description != previousRevision.description){
              bookChange.description += 'DESCRIPTION has been changed from "' + previousRevision.description + '" to ' + book.description + '". '
            }if(book.authors != previousRevision.authors){
              bookChange.description += 'AUTHORS have been changed from "' + previousRevision.authors + '" to ' + book.authors + '". '
            }if(book.publish_date != previousRevision.publish_date){
              bookChange.description += 'PUBLISH DATE has been changed from "' + previousRevision.publish_date + '" to ' + book.publish_date + '". '
            }
        }
  
        bookChanges.push(bookChange);
        console.log('push')
      }
    })).subscribe()
    
    setTimeout(() => console.log(bookChanges), 1500);
    return bookChanges;
  }
}
