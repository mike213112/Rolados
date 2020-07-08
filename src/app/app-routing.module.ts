import { FinalInventoryComponent } from './componentes/productos/inventario/final-inventory/final-inventory.component';
import { RawInventoryComponent } from './componentes/productos/inventario/raw-inventory/raw-inventory.component';
import { FinalComponent } from './componentes/productos/final/final.component';
import { IntermedioComponent } from './componentes/productos/intermedio/intermedio.component';
import { PrimarioComponent } from './componentes/productos/primario/primario.component';
import { AyudaComponent } from './componentes/principal/ayuda/ayuda.component';
import { ContactoComponent } from './componentes/principal/contacto/contacto.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { PrincipaldosComponent } from './componentes/principal/principaldos/principaldos.component';
import { PrincipalunoComponent } from './componentes/principal/principaluno/principaluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntermediateInventoryComponent } from './componentes/productos/inventario/intermediate-inventory/intermediate-inventory.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalunoComponent },
  { path: 'principal/contact', component: ContactoComponent },
  { path: 'principal/about', component: AyudaComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/principal', component: PrincipaldosComponent },
  { path: 'user/new/insert', component: PrimarioComponent },
  { path: 'user/new/intermediate', component: IntermedioComponent },
  { path: 'user/new/final', component: FinalComponent },
  { path: 'user/inventory/raw_inventory', component: RawInventoryComponent },
  { path: 'user/inventory/intermediate_inventory', component: IntermediateInventoryComponent },
  { path: 'user/inventory/final_inventory', component: FinalInventoryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
