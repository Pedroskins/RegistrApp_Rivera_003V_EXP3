import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroestudiantePageRoutingModule } from './registroestudiante-routing.module';

import { RegistroestudiantePage } from './registroestudiante.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroestudiantePageRoutingModule
  ],
  declarations: [RegistroestudiantePage]
})
export class RegistroestudiantePageModule {}
