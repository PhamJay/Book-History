// import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs';
// import {BookService} from './book.service';
// import {CollectionViewer, DataSource} from '@angular/cdk/collections';
// import {Book} from './book';
// import { map } from 'rxjs/operators';
// import { BookChange } from './book-change';
// import { of } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class BookDatasource extends DataSource<any> {

//   constructor(private bookService: BookService) {
//     super();
//   }

//   connect(): BookChange[] {
    
//     const obs = this.bookService.getBookChanges();
//     setTimeout(() => console.log(obs), 2000);
//     return obs;
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//   }
// }
