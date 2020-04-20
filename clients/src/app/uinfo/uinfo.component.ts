import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { Book } from '../librarys/book';

@Component({
  selector: 'app-uinfo',
  templateUrl: './uinfo.component.html',
  styleUrls: ['./uinfo.component.css'],
  providers: [LibraryService]
})
export class UinfoComponent implements OnInit {

  constructor(private libraryService: LibraryService) {}
  books: Book[];
  book: Book;
  edit_usn:string;
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
