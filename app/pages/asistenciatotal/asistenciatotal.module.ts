import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciatotalPageRoutingModule } from './asistenciatotal-routing.module';

import { AsistenciatotalPage } from './asistenciatotal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciatotalPageRoutingModule
  ],
  declarations: [AsistenciatotalPage]
})
export class AsistenciatotalPageModule {}
