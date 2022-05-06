import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticulosComponent} from './articulos/articulos.component'
import { ArticulosInsertComponent } from './articulos-insert/articulos-insert.component';
import { ArticulosUpdateComponent } from './articulos-update/articulos-update.component';
import { ArticulosDeleteComponent } from './articulos-delete/articulos-delete.component';

const routes: Routes = [
  {path:'art', component:ArticulosComponent},
  {path:'artIns', component:ArticulosInsertComponent},
  {path:'artUpd', component:ArticulosUpdateComponent},
  {path:'artDel', component:ArticulosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
