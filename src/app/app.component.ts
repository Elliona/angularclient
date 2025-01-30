import {Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabLink} from '@angular/material/tabs';
import {NgIf} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatTabsModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, RouterLinkActive, MatTabLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @ViewChild('sidenav') sidenav?: MatSidenavModule;
  title: string;
  isAddPage: boolean = false;
  isEditPage: boolean = false;
  isViewPage: boolean = false;
  isDeletePage: boolean = false;
  constructor(private router: Router) {
    this.title = 'Book Management - Angular Application';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAddPage = event.url.startsWith('/add');
        this.isEditPage = event.url.startsWith('/edit');
        this.isViewPage = event.url.startsWith('/view');
        this.isDeletePage = event.url.startsWith('/delete');
      }
    })
  }

  // toggleClick() {
  //   this.sidenav?.toggle();
  // }
}
