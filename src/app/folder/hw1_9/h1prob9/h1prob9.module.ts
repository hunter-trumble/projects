import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H1prob9PageRoutingModule } from './h1prob9-routing.module';

import { H1prob9Page } from './h1prob9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H1prob9PageRoutingModule
  ],
  declarations: [H1prob9Page]
})
export class H1prob9PageModule {}
