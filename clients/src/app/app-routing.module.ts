import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
// import { Book } from '../librarys/books.component';
import { BooksComponent } from './books/books.component';
import { LibrarysComponent } from './librarys/librarys.component';
import { InfoComponent } from './info/info.component';
import { UinfoComponent } from './uinfo/uinfo.component';
import { pathToFileURL } from 'url';
const routes: Routes = [
  {
  path : "books",
  component: BooksComponent

  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"info",
    component:InfoComponent
  },
  {
    path:"uinfo",
    component:UinfoComponent
  },
  
];
const rooti: Routes = [
  {
  path : "librarys",
  component: LibrarysComponent

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(rooti)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
