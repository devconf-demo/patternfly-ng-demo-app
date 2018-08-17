import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalNavigationExampleModule } from './vertical-nav/vertical-navigation-example.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'angular1', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VerticalNavigationExampleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
