import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';

import { VerticalNavigationExampleComponent } from './vertical-navigation-example.component';
import { RouterModule } from '@angular/router';
import { VerticalNavigationModule } from 'patternfly-ng';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule,
    TabsModule.forRoot(),
    VerticalNavigationModule
  ],
  declarations: [VerticalNavigationExampleComponent],
  exports: [VerticalNavigationExampleComponent],
  providers: [TabsetConfig, BsDropdownConfig]
})
export class VerticalNavigationExampleModule {
  constructor() {}
}
