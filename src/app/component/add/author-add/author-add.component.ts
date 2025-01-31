import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthorDto} from '../../../services/models/author-dto';
import {AuthorControllerService} from '../../../services/services/author-controller.service';
import {NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-author-add',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {
  author: AuthorDto = {}
  private _snackBar = inject(MatSnackBar)

  constructor(private authorControllerService: AuthorControllerService,) {
  }

  onSubmit() {
    this.authorControllerService.saveAuthor({body: this.author}).subscribe()
  }

  openSnackBar(message: string, action: string = 'OK') {
    this._snackBar.open(message, action);
  }
}
