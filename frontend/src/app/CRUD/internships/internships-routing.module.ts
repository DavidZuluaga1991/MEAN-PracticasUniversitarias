import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipsComponent } from './internships.component';

const routes: Routes = [
  {
    path: '',
    component: InternshipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipsRoutingModule { }
