import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DolorComponent } from './dolor.component';
import { ActionModule, ListModule } from 'patternfly-ng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListModule,
    ActionModule
  ],
  declarations: [DolorComponent],
  exports: [DolorComponent],
  providers: []
})
export class DolorModule {
  constructor() {}
}
