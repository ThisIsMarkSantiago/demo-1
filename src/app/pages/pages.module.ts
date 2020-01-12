import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
