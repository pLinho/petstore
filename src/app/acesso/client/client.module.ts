import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import {MatListModule} from '@angular/material/list';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class ClientModule { }
