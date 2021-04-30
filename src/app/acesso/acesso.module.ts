import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso.component';
import { NAVIGATION } from '../models/navigation.injection';
import { MatIconModule } from '@angular/material/icon';
import { navegation } from './../navigation';

@NgModule({
  declarations: [
    AcessoComponent,
  ],
  imports: [
    CommonModule,
    AcessoRoutingModule,
    MatIconModule,
  ],
  providers: [
    { provide: NAVIGATION, useValue: navegation }
  ]
})
export class AcessoModule { }
