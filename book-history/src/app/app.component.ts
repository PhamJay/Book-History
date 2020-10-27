import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { BookChange } from './book-change'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Book History';
  displayedColumns: string[] = ['timestamp', 'id', 'revision', 'description'];
  bookChanges = new Array<BookChange>();
  dataLoaded = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(){
    let books = await this.bookService.getBookChanges();
    console.log(books)
    this.getHistory(books);
  }

  getHistory(books){
    for (const book of books) {
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

          const previousRevision = books.find(previous => (previous.id === book.id) && (previous.revision === (book.revision - 1)))

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
      this.bookChanges.push(bookChange);
      console.log('push')
    }

    console.log(this.bookChanges)
    this.dataLoaded = true;
  }
}
