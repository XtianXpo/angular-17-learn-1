import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// * Imports de los Modulos
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

// * Imports de los Componentes
import { AppComponent } from './app.component';

// ! Importamos siempre en esta parte de la declaración el componente que vamos a utilizar.
// ? Para limpiar el código, siempre utilizaremos la sección de IMPORTS de modulos, que es:
// ? (Donde importaremos los "Paquetes" de declarations) para evitar tener muchas DECLARATIONS
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
