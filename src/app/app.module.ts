import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalNavigationExampleModule } from './vertical-nav/vertical-navigation-example.module';
import { RouterModule, Routes } from '@angular/router';
import { DolorModule } from './dolor/dolor.module';
import { DolorComponent } from './dolor/dolor.component';
import { AmetComponent } from './amet/amet.component';
import { AmetModule } from './amet/amet.module';

const appRoutes: Routes = [
  {path: 'angular1', component: AppComponent},
  {path: '', component: DolorComponent},
  {path: 'dolor', component: DolorComponent},
  {path: 'amet', component: AmetComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VerticalNavigationExampleModule,
    DolorModule,
    AmetModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
