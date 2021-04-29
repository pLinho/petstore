import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso.component';
import { NAVIGATION } from '../models/navigation.injection';
import { navigation } from '../navigation';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AcessoComponent
  ],
  imports: [
    CommonModule,
    AcessoRoutingModule,
    MatIconModule
  ],
  providers: [
    { provide: NAVIGATION, useValue: navigation }
  ]
})
export class AcessoModule { }
