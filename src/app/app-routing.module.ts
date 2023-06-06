import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { AuthorComponent } from './author/component/author/author.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent,   title: 'Home books' },
  { path: 'authors', component: AuthorComponent,  title: 'Home author' },
  { path: '',   redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
