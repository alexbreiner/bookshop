import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: any[] = [];
  authors: any[] = [];
  form!: FormGroup;
  title: string = '';
  IdBook: number = 0;

  constructor(private bookService: BookService) {
    this.getBooks();
    this.fomrInit();
    this.getAuthors();
  }

  getBooks() {
    this.bookService.listBooks().subscribe((res: any) => {
        this.books = res.content;
      });
  }

  fomrInit() {
    this.form = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.maxLength(150)],),
      'description': new FormControl('', [Validators.required]),
      'category': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'isbn': new FormControl('', [Validators.required]),
      'pages': new FormControl('', [Validators.required]),
      'publication_date': new FormControl('', [Validators.required]),
      'image': new FormControl('', [Validators.required]),
      'author': new FormGroup({
        'id': new FormControl('', [Validators.required])
      }),
    });
  }

  //update book
  onEdit(book: any) {
    console.log("Llego libro", book)
    this.IdBook = book.id;
    this.form.patchValue(book);
  }

  //Delete book
  onDelete(id: number) {
    this.bookService.delete(id).subscribe(res => {
      this.getBooks();
    });
  }

  //method for search a title of in book
  onSearch() {
    if (this.title.length > 0) {
      this.bookService.search(this.title).subscribe((res: any) => {
          this.books = res;
        });
    }
  }
  
  //evento para enviar los datos al backend
  onSubmit() {
    if (this.form.valid) {
      if (this.IdBook == 0) {
        this.bookService.saveBook(this.form.value)
          .subscribe(res => {
            const btnClose = document.getElementById('btn-close');
            btnClose?.click();
            this.getBooks();
          });
      } else {
        this.bookService.update(this.IdBook, this.form.value)
          .subscribe(res => {
            const btnClose = document.getElementById('btn-close');
            btnClose?.click();
            this.IdBook = 0;
            this.getBooks();
          });
      }
    }
  }

  getAuthors() {
    this.bookService.getAuthors().subscribe((res: any) => {
        this.authors = res;
      });
  }
}
