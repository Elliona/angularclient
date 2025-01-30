import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add',
  imports: [MatTabsModule, RouterOutlet, RouterLink, NgForOf, MatButton, NgIf, MatSidenavModule, RouterLinkActive],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  // drawerOpen = false;
  // selectedTab: any = null;
  //
  // tabs =[
  //   {label: 'Books', content: 'What is this Text doing here? Books'},
  //   {label: 'Authors', content: 'What is this Text doing here? Authors'},
  //   {label: 'Publishers', content: 'What is this Text doing here? Publishers'},
  //   {label: 'Series', content: 'What is this Text doing here? Series'}
  // ];
  //
  // openDrawer(tab:any) {
  //   this.selectedTab = tab;
  //   this.drawerOpen = true;
  // }

}
