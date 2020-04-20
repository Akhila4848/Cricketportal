import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { Library } from "../library";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [LibraryService]
})
export class InfoComponent implements OnInit {
  librarys: Library[];
  library: Library;

  constructor(private libraryService: LibraryService) {}
  deleteLibrary(id:any)
  {
    var librarys=this.librarys;
    this.libraryService.deleteLibrary(id)
    .subscribe(data =>{
        if(data.n=1)
        {
          for(var i =0; i<this.librarys.length;i++)
          {
            if(librarys[i]._id==id)
            {
              librarys.splice(i,1);
            }
          }
        }
    })
  }
  ngOnInit() {
    this.libraryService
      .getLibrarys()
      .subscribe(librarys => (this.librarys = librarys));
  }
}

