import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// import { StuffComponent } from './stuff/stuff.component'
// import { ThingsComponent } from './things/things.component'
import { RaceComponent } from './race/race.component'
import { SpellsComponent } from './spells/spells.component'
import { ClassesComponent } from './classes/classes.component'

const routes: Routes = [
  // { path: 'stuff', component: StuffComponent },
  // { path: 'things', component: ThingsComponent },
  { path: 'race', component: RaceComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'classes', component: ClassesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RaceComponent, SpellsComponent, ClassesComponent]
