import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AmetComponent } from './amet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [AmetComponent],
  exports: [AmetComponent],
  providers: []
})
export class AmetModule {
  constructor() {}
}
