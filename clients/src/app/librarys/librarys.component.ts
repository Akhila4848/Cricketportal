import { Component, OnInit } from "@angular/core";
import { LibraryService } from "../library.service";
import { Library } from "../library";

@Component({
  selector: "app-librarys",
  templateUrl: "./librarys.component.html",
  styleUrls: ["./librarys.component.css"],
  providers: [LibraryService]
})
export class LibrarysComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}
  librarys: Library[];
  library: Library;
  first_name: string;
  last_name: string;
  doj: string;
  bday: string;
  type:string;
  addLibrary() 
  {
    const newLibrary = {
      first_name: this.first_name,
      last_name: this.last_name,
      doj: this.doj,
      bday: this.bday,
      type:this.type
    }
    this.libraryService.addLibrary(newLibrary).subscribe(library => {
      this.librarys.push(library);
      this.libraryService
      .getLibrarys()
      .subscribe(librarys => (this.librarys = librarys));

    });
  }
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
  // deleteLibrary()
  // {
  //   this.libraryService.deleteLibrary(this.library._id).subscribe(
  //     () => console.log(`student with id = $(this.library._id) deleted`),
  //     (err)=>console.log()

  //   );
    
  // }
  // deleteLibrary(id:any) {
  //   var librarys = this.librarys;
  //   this.libraryService.deleteLibrary(id).subscribe(data => {
  //     if (data.n == 1) {
  //       for (var i = 0; i < librarys.length; i++) {
  //         if (librarys[i]._id == id) {
  //           librarys.splice(i, 1);
  //         }
  //       }
  //     }
  //   })
  // }
  ngOnInit() {
    this.libraryService
      .getLibrarys()
      .subscribe(librarys => (this.librarys = librarys));
  }
}
