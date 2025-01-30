import { Component, OnInit } from '@angular/core';
import { AuthorDto} from '../../../services/models/author-dto';
import { AuthorControllerService} from '../../../services/services/author-controller.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-author-view',
  imports: [MatTableModule],
  templateUrl: './author-view.component.html',
  styleUrl: './author-view.component.css'
})
export class AuthorViewComponent implements OnInit {
  authors!: Array<AuthorDto>;
  displayedColumns: string[] = ['ID', 'Name', 'FullName', 'YearofBirth', 'YearofDeath', 'NumberofBooks', 'Books']
  dataSource = this.authors

  constructor(private authorControllerService: AuthorControllerService) {
  }

  ngOnInit() {
    this.authorControllerService
      .getAllAuthors()
      .subscribe(authors => {
        this.authors = authors;
      })
  }

}
