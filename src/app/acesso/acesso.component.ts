import { Component, OnInit, Inject} from '@angular/core';
import { INavegation } from '../models/i-navigation';
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
    public nav: INavegation[],
    public service: UserService
  ) { }

  ngOnInit(): void {
  }

}
