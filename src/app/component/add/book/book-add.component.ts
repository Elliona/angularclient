import {Component, inject} from '@angular/core';
import {BookDto} from '../../../services/models/book-dto';
import {BookControllerService} from '../../../services/services/book-controller.service';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {AuthorDto} from '../../../services/models/author-dto';
import {AuthorControllerService} from '../../../services/services/author-controller.service';
import {RelationControllerService} from '../../../services/services/relation-controller.service';
import {RelationDto} from '../../../services/models/relation-dto';
import {NgForOf, NgIf} from '@angular/common';
import {PublisherDto} from '../../../services/models/publisher-dto';
import {SeriesDto} from '../../../services/models/series-dto';
import {PublisherControllerService} from '../../../services/services/publisher-controller.service';
import {SeriesControllerService} from '../../../services/services/series-controller.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-add',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NgForOf, MatSidenavModule, NgIf],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
  standalone: true,

})
export class BookAddComponent {
  book: BookDto = {};
  authors: AuthorDto [] = [];
  publisher: PublisherDto [] = [];
  series: SeriesDto [] = [];
  private _snackBar = inject(MatSnackBar)

  constructor(private bookControllerService: BookControllerService, private authorControllerService: AuthorControllerService, private relationControllerService: RelationControllerService, private publisherControllerService: PublisherControllerService, private seriesControllerService: SeriesControllerService) {
  }

  ngOnInit() {
    this.loadAuthors()
    this.loadPublishers()
    this.loadSeries()
  }

  loadAuthors() {
    this.authorControllerService.getAllAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  loadPublishers() {
    this.publisherControllerService.getAllPublishers().subscribe(publisher => {
      this.publisher = publisher;
    })
  }

  loadSeries() {
    this.seriesControllerService.getAllSeries().subscribe(series => {
      this.series = series;
    })
  }

  onSubmit() {
    const publisher = this.publisher.find(p => p.publisherName === this.book.bookPublisherName);
    const series = this.series.find(s => s.seriesName === this.book.bookSeriesName);
    this.bookControllerService.saveBook({body: this.book}).subscribe({
      next: (createdBook) => {
        if (createdBook && createdBook.bookId) {
          if (this.book?.bookAuthors && this.book.bookAuthors.length > 0) {
            this.createBookAuthorRelation(createdBook.bookId);
          }
          if (publisher) {
            this.createBookPublisherRelation(createdBook.bookId, publisher.publisherId);
          }
          if (series) {
            this.createBookSeriesRelation(createdBook.bookId, series.seriesId);
          }
        }
      }, error: (err) => {
        console.error('Error saving book:', err);
      }
    });
  }


  createBookAuthorRelation(bookId: number | undefined) {

    this.book?.bookAuthors?.forEach((authorName) => {
      const author = this.authors.find((a) => a.authorName === authorName);
      if (author && author.authorId) {
        const relation: RelationDto = {bookId, authorId: author.authorId};
        this.relationControllerService.createRelation({body: relation}).subscribe(() => {
        });
      } else {
        console.error(`Author "${authorName}" not found`);
      }
    });

  }

  createBookPublisherRelation(bookId: number | undefined, publisherId: number | undefined) {
    const relation: RelationDto = {bookId, publisherId};
    this.relationControllerService.createRelation({body: relation}).subscribe();
  }

  createBookSeriesRelation(bookId: number | undefined, seriesId: number | undefined) {
    const relation: RelationDto = {bookId, seriesId};
    this.relationControllerService.createRelation({body: relation}).subscribe();

  }

  openSnackBar(message: string, action: string = 'OK') {
    this._snackBar.open(message, action);
  }


}
