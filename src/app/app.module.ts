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
import { RodCreateComponent } from './rod/rod-create/rod-create.component';
import { RodDetailComponent } from './rod/rod-detail/rod-detail.component';
import { RodEditComponent } from './rod/rod-edit/rod-edit.component';
import { RodListComponent } from './rod/rod-list/rod-list.component';
import { RodRemoveComponent } from './rod/rod-remove/rod-remove.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FishCreateComponent,
    FishDetailComponent,
    FishEditComponent,
    FishListComponent,
    RodCreateComponent,
    RodDetailComponent,
    RodEditComponent,
    RodListComponent,
    RodRemoveComponent,
    NavComponent,
    NavItemComponent
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
