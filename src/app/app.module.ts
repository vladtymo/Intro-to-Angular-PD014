import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { EnumToStringPipe } from './enum-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    EnumToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
