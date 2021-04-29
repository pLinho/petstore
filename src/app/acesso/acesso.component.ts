import { Component, Inject, OnInit } from '@angular/core';
import { INavigation } from '../models/i-navigation';
import { NAVIGATION } from '../models/navigation.injection';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ns-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  constructor(
    @Inject(NAVIGATION)
    public nav: INavigation[],
    public service: UserService,
  ) { }

  ngOnInit(): void {
  }

}
