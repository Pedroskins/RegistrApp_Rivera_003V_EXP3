import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfildocentePageRoutingModule } from './perfildocente-routing.module';

import { PerfildocentePage } from './perfildocente.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PerfildocentePageRoutingModule
  ],
  declarations: [PerfildocentePage]
})
export class PerfildocentePageModule {}
