import {Component, OnInit} from '@angular/core';
import {BookDto} from '../../../services/models/book-dto';
import {BookControllerService} from '../../../services/services/book-controller.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  imports: [MatTableModule],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit {

  books!: Array<BookDto>;
  displayedColumns: string[] = ['ID', 'Title', 'Author', 'Release', 'Edition', 'ISBN', 'ASIN', 'Synopsis', 'Pages', 'Publisher', 'Series', 'Entry in Series'];
  dataSource = this.books;

  constructor(private bookControllerService: BookControllerService) {
  }

  ngOnInit() {
    this.bookControllerService
      .getAllBooks()
      .subscribe(books => {
        this.books = books
      });
  }

}
