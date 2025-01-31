import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {PublisherDto} from '../../../services/models/publisher-dto';
import {PublisherControllerService} from '../../../services/services/publisher-controller.service';
import {NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-publisher-add',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf],
  templateUrl: './publisher-add.component.html',
  styleUrl: './publisher-add.component.css'
})
export class PublisherAddComponent {

  publisher: PublisherDto = {}
  private _snackBar = inject(MatSnackBar)

  constructor(private publisherControllerService: PublisherControllerService) {
  }

  onSubmit() {
    this.publisherControllerService.savePublisher({body: this.publisher}).subscribe()
  }

  openSnackBar(message: string, action: string = 'OK') {
    this._snackBar.open(message, action);
  }

}
