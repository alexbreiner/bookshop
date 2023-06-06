import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  api: string = 'http://localhost:8080/api/v1/book/list/page?pageNumber=0&pageSize=2&sort=title,asc';
  constructor(private http: HttpClient) { }
  //save Book
  saveBook(book: any) {
    return this.http.post('http://localhost:8080/api/v1/book/save', book)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
  // read authors
  getAuthors() {
    return this.http.get('http://localhost:8080/api/v1/author/list')
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
  // list all book 
  listBooks() {
    return this.http.get(this.api)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
  //search book
  search(title: string) {
    return this.http.get('http://localhost:8080/api/v1/book/search/' + title)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }

  //update book
  update(id: number, book: any) {
    book.id = id;
    return this.http.put('http://localhost:8080/api/v1/book/update', book)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }

  //delete book
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/v1/book/delete/' + id)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
}
