import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LiftComponent } from './lift/lift.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';

var routeConfig:Routes = [
  {path:'',component:ChildComponent},
  {path:'child1',component:Child1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    LiftComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
