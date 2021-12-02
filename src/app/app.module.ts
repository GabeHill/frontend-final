import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuffComponent } from './stuff/stuff.component';
import { ThingsComponent } from './things/things.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    StuffComponent,
    ThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
