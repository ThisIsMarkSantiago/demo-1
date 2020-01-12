import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ServicesModule
  ],
  exports: [
    HomeComponent,
    RegistrationComponent
  ]
})
export class PagesModule { }
