import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  //save Book
  save(author: Author) {
    return this.http.post('http://localhost:8080/api/v1/author/save', author)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
  // read authors
  list() {
    return this.http.get('http://localhost:8080/api/v1/author/list')
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
  //search book
  search(title: string) {
    return this.http.get('http://localhost:8080/api/v1/author/search/' + title)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }

  //update book
  update(id: number, author: Author) {
    author.id = id;
    return this.http.put('http://localhost:8080/api/v1/author/update' , author)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }

  //delete book
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/v1/author/delete/' + id)
      .pipe(
        map(data => {
          return data;
        }),
      );
  }
}
