import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso.component';
import {MatIconModule} from '@angular/material/icon';
import { NAVIGATION } from '../models/navigation.injection';
import { navgation } from '../models/navigation';


@NgModule({
  declarations: [
    AcessoComponent,
  ],
  imports: [
    CommonModule,
    AcessoRoutingModule,
    MatIconModule
    
  ],
  providers: [
    { provide: NAVIGATION, useValue: navgation}
  ]
})
export class AcessoModule { }
