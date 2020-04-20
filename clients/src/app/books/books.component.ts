import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
// import {Book} from "../books";
import { Book } from '../librarys/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [LibraryService]
})
export class BooksComponent implements OnInit {
  

  constructor(private libraryService: LibraryService) { }
  books: Book[];
  book: Book;
  p_name:string;
  last_name:string;
  password:string;
  repno:string;
  // usn:string;
  edit_usn:string;
  addBook() 
  {
    const newBook = {
      p_name: this.p_name,
      last_name: this.last_name,
      password: this.password,
      repno: this.repno,
      // 
    }
    this.libraryService.addBook(newBook).subscribe(book => {
      this.books.push(book);
      this.libraryService
      .getBooks()
      .subscribe(books => (this.books = books));

    });
  }
  deleteBook(id:any)
  {
    var books=this.books;
    this.libraryService.deleteBook(id)
    .subscribe(data =>{
        if(data.n=1)
        {
          for(var i =0; i<this.books.length;i++)
          {
            if(books[i]._id==id)
            {
              books.splice(i,1);
            }
          }
        }
    })
  }
  
  UpdateDetails(id:any,edit_usn:any)
  {
    // const id=this.routes.snapshot.paramMap.get("_id");
    this.libraryService.UpdateDetails(id,edit_usn)
    .subscribe(data=>{})
  }
  ngOnInit() {

    this.libraryService
      .getBooks()
      .subscribe(books => (this.books = books));
  }

}
