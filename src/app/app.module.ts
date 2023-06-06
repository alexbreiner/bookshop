import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookCreateComponent } from './books/components/book-create/book-create.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookEditComponent } from './books/components/book-edit/book-edit.component';
import { BookDeleteComponent } from './books/components/book-delete/book-delete.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule   } from '@angular/forms';
import { AuthorComponent } from './author/component/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookCreateComponent,
    BookListComponent,
    BookEditComponent,
    BookDeleteComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
