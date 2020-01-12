import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    ButtonsModule
  ]
})
export class BootstrapModule { }
