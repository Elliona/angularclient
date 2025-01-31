import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-add',
  imports: [MatTabsModule, MatSidenavModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

}
