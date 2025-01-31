import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SeriesDto} from '../../../services/models/series-dto';
import {SeriesControllerService} from '../../../services/services/series-controller.service';
import {NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-series-add',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgIf],
  templateUrl: './series-add.component.html',
  styleUrl: './series-add.component.css'
})
export class SeriesAddComponent {
  series: SeriesDto = {}
  private _snackBar = inject(MatSnackBar)

  constructor(private seriesControllerService: SeriesControllerService) {
  }

  onSubmit() {
    this.seriesControllerService.addSeries({body: this.series}).subscribe()
  }

  openSnackBar(message: string, action: string = 'OK') {
    this._snackBar.open(message, action);
  }

}
