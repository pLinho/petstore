import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso.component';

const routes: Routes = [
  {path: '', component: AcessoComponent , children:[

    { path: 'pets', loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
