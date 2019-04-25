import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishCreateComponent } from './fish/fish-create/fish-create.component';
import { FishDetailComponent } from './fish/fish-detail/fish-detail.component';
import { FishEditComponent } from './fish/fish-edit/fish-edit.component';
import { FishListComponent } from './fish/fish-list/fish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FishCreateComponent,
    FishDetailComponent,
    FishEditComponent,
    FishListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
