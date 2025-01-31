import {Component, OnInit} from '@angular/core';
import {BookDto} from '../../services/models/book-dto';
import {BookControllerService} from '../../services/services/book-controller.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  books!: Array<BookDto>;
  displayedColumns: string [] = ['Entry', 'Title', 'Author', 'Publisher', 'Edition', 'ID'];
  dataSource = this.books;


  constructor(private bookControllerService: BookControllerService) {
  }

  ngOnInit() {
    const bookPublisherName = 'Harper Collins';
    const bookEdition = 1;
    const bookEntryInSeries = 1;
    this.bookControllerService
      .getBookByPubEdiEntry({bookPublisherName, bookEdition, bookEntryInSeries})
      .subscribe(books => {
        this.books = books
      });
  }

}
