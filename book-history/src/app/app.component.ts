import { Component, OnInit } from '@angular/core';
import { BookDatasource } from './book-datasource.service';
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
  bookChanges = null;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookChanges = this.bookService.getBookChanges()
    console.log('last')
  }
}
