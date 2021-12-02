import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StuffComponent } from './stuff/stuff.component'
import { ThingsComponent } from './things/things.component'

const routes: Routes = [
  { path: 'stuff', component: StuffComponent },
  { path: 'things', component: ThingsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [StuffComponent, ThingsComponent]
