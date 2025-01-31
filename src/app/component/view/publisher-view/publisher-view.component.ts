import {Component, OnInit} from '@angular/core';
import {PublisherDto} from '../../../services/models/publisher-dto';
import {PublisherControllerService} from '../../../services/services/publisher-controller.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-publisher-view',
  imports: [MatTableModule],
  templateUrl: './publisher-view.component.html',
  styleUrl: './publisher-view.component.css'
})
export class PublisherViewComponent implements OnInit {
  publishers!: Array<PublisherDto>;
  displayedColumns: string[] = ['publisherId', 'publisherName', 'publisherOriginCountry', 'publisherOriginCity', 'publisherNumberOfBooks', 'publisherBooks'];
  dataSource = this.publishers;

  constructor(private publisherControllerService: PublisherControllerService) {
  }

  ngOnInit() {
    this.publisherControllerService
      .getAllPublishers()
      .subscribe(publishers => {
        this.publishers = publishers;
      });
  }

}
