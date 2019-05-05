import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FishCreateComponent } from './fish/fish-create/fish-create.component';
import { FishDetailComponent } from './fish/fish-detail/fish-detail.component';
import { FishEditComponent } from './fish/fish-edit/fish-edit.component';
import { FishListComponent } from './fish/fish-list/fish-list.component';

import { RodListComponent } from './rod/rod-list/rod-list.component';
import { RodEditComponent } from './rod/rod-edit/rod-edit.component';
import { RodCreateComponent } from './rod/rod-create/rod-create.component';
import { RodRemoveComponent } from './rod/rod-remove/rod-remove.component';

import { RemovalToolComponent } from './utility/removal-tool/removal-tool.component'


const routes: Routes = [
  {path: '', redirectTo: '/fish/list', pathMatch: 'full'},
  {path: 'fish/list', component: FishListComponent},
  {path: 'fish/list/:id', component: FishListComponent},

  {path: 'fish/create', component: FishCreateComponent},
  {path: 'fish/edit/:id', component: FishEditComponent},
  {path: 'fish/detail/:id', component: FishDetailComponent},


  {path: 'rods/list', component: RodListComponent},
  {path: 'rods/edit/:id', component: RodEditComponent},
  {path: 'rods/create', component: RodCreateComponent},
  {path: 'rods/remove/:id', component: RodRemoveComponent},

  {path: 'fish/mark/:id', component: RemovalToolComponent},

  {path: '**', component: FishListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
