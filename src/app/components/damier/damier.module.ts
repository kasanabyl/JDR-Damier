import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamierComponent } from './damier.component';



@NgModule({
  declarations: [
    DamierComponent
  ],
  exports: [
    DamierComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DamierModule { }
