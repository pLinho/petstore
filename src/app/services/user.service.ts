import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from '../models/user';
import { IMessage } from '../models/message';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarioAcesso?: IUser;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async login(username: string, password: string) {
    const endpoint = `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`;
    const endpoint2 = `https://petstore.swagger.io/v2/user/${username}`;
    const acesso = await this.http.get<IMessage>(endpoint).toPromise();
    if (acesso.code === 200) {
      this.usuarioAcesso = await this.http.get<IUser>(endpoint2).toPromise();
      this.router.navigate(['/acesso']);
    }
  }

  async register(newUser: IUser) {
    const endpoint = `https://petstore.swagger.io/v2/user`;
    const message = await this.http.post<IMessage>(endpoint, newUser).toPromise();
    if (message.code === 200 && !isNaN(Number(message.message))) {
      newUser.id = Number(message.message);
    }
    return newUser;
  }


}
