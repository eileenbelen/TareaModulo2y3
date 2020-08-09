import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './mi-pagina/nav/nav.component';
import { FooterComponent } from './mi-pagina/footer/footer.component';
import { MainComponent } from './mi-pagina/main/main.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent, FooterComponent, MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
