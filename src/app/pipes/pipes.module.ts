import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTextPipe } from './display-text.pipe';



@NgModule({
  declarations: [DisplayTextPipe],
  imports: [
    CommonModule
  ],
  exports: [DisplayTextPipe]
})
export class PipesModule { }
