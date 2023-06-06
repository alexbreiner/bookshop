import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  authors: Author[] = [];
  author: Author = { id: 0, name: '', lastname: '', biography: '' };

  constructor(private authorService: AuthorService) {
    this.getAuthors();
  }
  
  //Save new author
  onSubnmit() {
    const btnCerrar = document.getElementById("btn-close");
    if (this.author.id == 0) {
      this.authorService.save(this.author).subscribe(res => {
        btnCerrar?.click();
        this.getAuthors();
      });
    } else {
      this.authorService.update(this.author.id, this.author).subscribe(res => {
        btnCerrar?.click();
        this.getAuthors();
      });
    }
  }

  onEdit(author: Author) {
    this.author = author;
  }

  onSelected(author: Author) {
    this.author = author;
  }

  //eliminar
  onDelete() {
    this.authorService.delete(this.author.id).subscribe(res => {
      const btnClose = document.getElementById('btn-delete');
      btnClose?.click();
      this.getAuthors();
    });  
  }

  //Obtener
  getAuthors() {
    this.authorService.list().subscribe(res => {
      this.authors = <Author[]>res;
    });
  }
}
