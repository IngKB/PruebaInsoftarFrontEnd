import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCreationComponent } from './pages/user-creation/user-creation.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './shared/_alert';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreationComponent,
    UserEditComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
