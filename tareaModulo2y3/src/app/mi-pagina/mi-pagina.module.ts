import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [NavComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class MiPaginaModule { }
