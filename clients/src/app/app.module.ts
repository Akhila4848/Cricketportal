import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrarysComponent } from './librarys/librarys.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { UinfoComponent } from './uinfo/uinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    LibrarysComponent,
    BooksComponent,
    SigninComponent,
    SignupComponent,
    InfoComponent,
    UinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
