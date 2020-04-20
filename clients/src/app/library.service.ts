import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Library} from './library';

import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: Http) { }
  //retreive student
  getLibrarys()
  {
    return this.http.get('http://localhost:3000/api/librarys')
    .map(res => res.json());
  }
 //add library 
 addLibrary(newLibrary)
 {
   var headers=new Headers();
   headers.append('Content-Type','application/json');
   return this.http.post('http://localhost:3000/api/library',newLibrary,{headers:headers})
   .map(res=>res.json());
 }
 //delete library
 deleteLibrary(id:any)
 {
   return this.http.delete('http://localhost:3000/api/library/'+id)
   .map(res => res.json());
 }

 getBooks()
 {
   return this.http.get('http://localhost:3000/api/books')
   .map(res => res.json());
 }
//add library 
addBook(newBook)
{
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/api/book',newBook,{headers:headers})
  .map(res=>res.json());
}
//delete library
deleteBook(id:any)
{
  return this.http.delete('http://localhost:3000/api/book/'+id)
  .map(res => res.json());
}
UpdateDetails(id:any,repno:any)
{
  // print();
  return this.http.put('http://localhost:3000/api/book/'+id+"&"+repno,id);
  // .map(res => res.json());
}
getPerson()
 {
   return this.http.get('http://localhost:3000/api/signin')
   .map(res => res.json());
 }
//add library 
addPerson(newSignin)
{
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/api/signin',newSignin,{headers:headers})
  .map(res=>res.json());
}
//delete library
deletePerson(id:any)
{
  return this.http.delete('http://localhost:3000/api/sigin/'+id)
  .map(res => res.json());
}

}
