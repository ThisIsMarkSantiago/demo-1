import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ServicesModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    RegistrationComponent,
    ConfirmationComponent
  ]
})
export class PagesModule { }
