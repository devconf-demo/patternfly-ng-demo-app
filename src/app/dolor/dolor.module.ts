import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DolorComponent } from './dolor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [DolorComponent],
  exports: [DolorComponent],
  providers: []
})
export class DolorModule {
  constructor() {}
}
