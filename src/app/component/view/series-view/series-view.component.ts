import {Component, OnInit} from '@angular/core';
import {SeriesDto} from '../../../services/models/series-dto';
import {SeriesControllerService} from '../../../services/services/series-controller.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-series-view',
  imports: [MatTableModule],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css'
})
export class SeriesViewComponent implements OnInit {

  series!: Array<SeriesDto>;
  displayedColumns: string[] = ['seriesId', 'seriesName', 'seriesNumberOfEntries', 'seriesBooks'];
  dataSource = this.series;

  constructor(private seriesControllerService: SeriesControllerService) {
  }

  ngOnInit() {
    this.seriesControllerService
      .getAllSeries()
      .subscribe(series => {
        this.series = series;
      });
  }

}
