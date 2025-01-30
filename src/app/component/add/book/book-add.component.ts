import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BookDto} from '../../../services/models/book-dto';
import {ActivatedRoute, Router} from '@angular/router';
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
import {NgForOf} from '@angular/common';
import {PublisherDto} from '../../../services/models/publisher-dto';
import {SeriesDto} from '../../../services/models/series-dto';
import {PublisherControllerService} from '../../../services/services/publisher-controller.service';
import {SeriesControllerService} from '../../../services/services/series-controller.service';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-book-add',
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NgForOf, MatSidenavModule
  ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookAddComponent {
  book: BookDto = {};
  authors: AuthorDto [] = [];
  publisher: PublisherDto [] = [];
  series: SeriesDto [] = [];

  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private bookControllerService: BookControllerService,
    private authorControllerService: AuthorControllerService,
    private relationControllerService: RelationControllerService,
    private publisherControllerService: PublisherControllerService,
    private seriesControllerService: SeriesControllerService) {
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
        console.log('Book saved successfully:', createdBook);

        if (createdBook && createdBook.bookId) {
          console.log(`Book ID received: ${createdBook.bookId}`);
          this.createBookAuthorRelation(createdBook.bookId);
          if (publisher) {
            console.log('publisher was found', publisher);
            this.createBookPublisherRelation(createdBook.bookId, publisher.publisherId);
          }
          if (series) {
            console.log('Series was found', series);
            this.createBookSeriesRelation(createdBook.bookId, series.seriesId);
          }
        }
      },
      error: (err) => {
        console.error('Error saving book:', err);
      }
    });
  }


  createBookAuthorRelation(bookId: number) {

    // @ts-ignore
    this.book.bookAuthors.forEach((authorName) => {
      const author = this.authors.find((a) => a.authorName === authorName);
      if (author && author.authorId) {
        console.log(`authorId is ${author.authorId}`);
        const relation: RelationDto = {bookId, authorId: author.authorId};
        this.relationControllerService.createRelation({body: relation}).subscribe(() => {
          console.log(`Relation created: Book ${bookId} - Author ${author.authorId}`);
        });
      } else {
        console.error(`Author "${authorName}" not found`);
      }
    });

  }

  createBookPublisherRelation(bookId: number, publisherId: number) {
    console.log('publisherId is ', publisherId);
    const relation: RelationDto = {bookId, publisherId};
    this.relationControllerService.createRelation({body: relation}).subscribe();
  }

  createBookSeriesRelation(bookId: number, seriesId: number) {
    console.log('seriesID is ', seriesId);
    const relation: RelationDto = {bookId, seriesId};
    this.relationControllerService.createRelation({body: relation}).subscribe();

  }


}
