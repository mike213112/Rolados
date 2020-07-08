import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControlName } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalunoComponent } from './componentes/principal/principaluno/principaluno.component';
import { PrincipaldosComponent } from './componentes/principal/principaldos/principaldos.component';
import { ContactoComponent } from './componentes/principal/contacto/contacto.component';
import { AyudaComponent } from './componentes/principal/ayuda/ayuda.component';
import { IngresarnuevosdatosComponent } from './componentes/nuevos/ingresarnuevosdatos/ingresarnuevosdatos.component';
import { PrimarioComponent } from './componentes/productos/primario/primario.component';
import { IntermedioComponent } from './componentes/productos/intermedio/intermedio.component';
import { FinalComponent } from './componentes/productos/final/final.component';
import { ReporteComponent } from './componentes/productos/reporte/reporte.component';
import { RawInventoryComponent } from './componentes/productos/inventario/raw-inventory/raw-inventory.component';
import { IntermediateInventoryComponent } from './componentes/productos/inventario/intermediate-inventory/intermediate-inventory.component';
import { FinalInventoryComponent } from './componentes/productos/inventario/final-inventory/final-inventory.component';

//Conexion
import { SesionService } from './services/login/sesion.service';
import { ConexionService } from './services/base/conexion.service';

//Base
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//variable de conexion a la base
import { environment } from '../environments/environment';
import { LoginComponent } from './componentes/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalunoComponent,
    PrincipaldosComponent,
    ContactoComponent,
    AyudaComponent,
    IngresarnuevosdatosComponent,
    PrimarioComponent,
    IntermedioComponent,
    FinalComponent,
    ReporteComponent,
    RawInventoryComponent,
    IntermediateInventoryComponent,
    FinalInventoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    SesionService,
    ConexionService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
