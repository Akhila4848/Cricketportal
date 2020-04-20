import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
// import {Book} from "../books";
import { Signin } from '../librarys/signin';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [LibraryService]
})
export class SigninComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

signins: Signin[];
  signin: Signin;
  user_name:string;
  password:string;
  
  addPerson() 
  {
    const newSignin = {
      user_name: this.user_name,
      password: this.password
     
    }
    this.libraryService.addPerson(newSignin).subscribe(signin => {
      this.signins.push(this.signin);
      this.libraryService
      .getPerson()
      .subscribe(signins => (this.signins = signins));

    });
  }
  deletePerson(id:any)
  {
    var signins=this.signins;
    this.libraryService.deletePerson(id)
    .subscribe(data =>{
        if(data.n=1)
        {
          for(var i =0; i<this.signins.length;i++)
          {
            if(signins[i]._id==id)
            {
              signins.splice(i,1);
            }
          }
        }
    })
  }
  

  ngOnInit() {

    this.libraryService
      .getPerson()
      .subscribe(signins => (this.signins = signins));
  }

}