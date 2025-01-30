import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {AddComponent} from './component/add/add/add.component';
import {EditComponent} from './component/edit/edit/edit.component';
import {ViewComponent} from './component/view/view/view.component';
import {DeleteComponent} from './component/delete/delete/delete.component';
import {BookAddComponent} from './component/add/book/book-add.component';
import {BookEditComponent} from './component/edit/book-edit/book-edit.component';
import {BookViewComponent} from './component/view/book/book-view.component';
import {BookDeleteComponent} from './component/delete/book-delete/book-delete.component';
import {AuthorAddComponent} from './component/add/author-add/author-add.component';
import {AuthorEditComponent} from './component/edit/author-edit/author-edit.component';
import {AuthorViewComponent} from './component/view/author-view/author-view.component';
import {AuthorDeleteComponent} from './component/delete/author-delete/author-delete.component';
import {PublisherAddComponent} from './component/add/publisher-add/publisher-add.component';
import {PublisherEditComponent} from './component/edit/publisher-edit/publisher-edit.component';
import {PublisherViewComponent} from './component/view/publisher-view/publisher-view.component';
import {PublisherDeleteComponent} from './component/delete/publisher-delete/publisher-delete.component';
import {SeriesAddComponent} from './component/add/series-add/series-add.component';
import {SeriesEditComponent} from './component/edit/series-edit/series-edit.component';
import {SeriesViewComponent} from './component/view/series-view/series-view.component';
import {SeriesDeleteComponent} from './component/delete/series-delete/series-delete.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'add/book', component: BookAddComponent},
  {path: 'add/author', component: AuthorAddComponent},
  {path: 'add/publisher', component: PublisherAddComponent},
  {path: 'add/series', component: SeriesAddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'edit/book', component: BookEditComponent},
  {path: 'edit/author', component: AuthorEditComponent},
  {path: 'edit/publisher', component: PublisherEditComponent},
  {path: 'edit/series', component: SeriesEditComponent},
  {path: 'view', component: ViewComponent},
  {path: 'view/book', component: BookViewComponent},
  {path: 'view/author', component: AuthorViewComponent},
  {path: 'view/publisher', component: PublisherViewComponent},
  {path: 'view/series', component: SeriesViewComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'delete/book', component: BookDeleteComponent},
  {path: 'delete/author', component: AuthorDeleteComponent},
  {path: 'delete/publisher', component: PublisherDeleteComponent},
  {path: 'delete/series', component: SeriesDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
