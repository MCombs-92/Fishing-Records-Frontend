import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FishCreateComponent } from './fish/fish-create/fish-create.component';
import { FishDetailComponent } from './fish/fish-detail/fish-detail.component';
import { FishEditComponent } from './fish/fish-edit/fish-edit.component';
import { FishListComponent } from './fish/fish-list/fish-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/fish/list', pathMatch: 'full'},
  {path: 'fish/list', component: FishListComponent},
  {path: 'fish/list/:id', component: FishListComponent},

  {path: 'fish/create', component: FishCreateComponent},
  {path: 'fish/edit/:id', component: FishEditComponent},
  {path: 'fish/detail/:id', component: FishDetailComponent},
  {path: '**', component: FishListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
