import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'level1', component: Level1Component },
  { path: 'level1/level2', component: Level2Component },
  { path: 'level1/level2/level3', component: Level3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
