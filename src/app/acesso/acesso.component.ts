import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NAVIGATION } from '../models/navigation.injection';
import { INavigation } from '../models/inavigation';
import { UserGuard } from '../user.guard';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ns-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  constructor( public service : UserService, 
  
  @Inject(NAVIGATION)
  public nav: INavigation[],) { 
  
  }

  ngOnInit(): void {
  }

}
