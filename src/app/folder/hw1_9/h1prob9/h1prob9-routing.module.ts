import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H1prob9Page } from './h1prob9.page';

const routes: Routes = [
  {
    path: '',
    component: H1prob9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H1prob9PageRoutingModule {}
