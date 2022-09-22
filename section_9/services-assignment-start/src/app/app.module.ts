import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './shared/users.service';
import { CounterComponent } from './shared/counter/counter.component';
import { CounterService } from './shared/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
