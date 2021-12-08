import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuffComponent } from './stuff/stuff.component';
import { ThingsComponent } from './things/things.component';
import { RaceComponent } from './race/race.component';
import { SpellsComponent } from './spells/spells.component';
import { ClassesComponent } from './classes/classes.component';
import { TraitsComponent } from './traits/traits.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    StuffComponent,
    ThingsComponent,
    RaceComponent,
    SpellsComponent,
    ClassesComponent,
    TraitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
