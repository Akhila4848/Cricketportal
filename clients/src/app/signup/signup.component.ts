import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { Signup } from '../librarys/signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LibraryService]
})
export class SignupComponent implements OnInit {
  constructor(private libraryService: LibraryService) { }

  signups: Signup[];
    signup: Signup;
    Name:string;
    user_name:string;
    password:string;
    phno:string
    
    addPerson() 
    {
      const newSignup = {
        Name: this.Name,
        user_name:this.user_name,
        password: this.password,
        phno:this.phno
       
      }
      this.libraryService.addPerson(newSignup).subscribe(signup => {
        this.signups.push(this.signup);
        this.libraryService
        .getPerson()
        .subscribe(signups => (this.signups = signups));
  
      });
    }
    deletePerson(id:any)
    {
      var signups=this.signups;
      this.libraryService.deletePerson(id)
      .subscribe(data =>{
          if(data.n=1)
          {
            for(var i =0; i<this.signups.length;i++)
            {
              if(signups[i]._id==id)
              {
                signups.splice(i,1);
              }
            }
          }
      })
    }
    
  
    ngOnInit() {
  
      this.libraryService
        .getPerson()
        .subscribe(signins => (this.signups = this.signups));
    }
  
  }