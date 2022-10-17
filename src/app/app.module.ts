import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToStringPipe } from './enum-to-string.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    EnumToStringPipe,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
