import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso.component';

const routes: Routes = [
  {
    path: '', component: AcessoComponent, children: [
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
      { path: 'pets', loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule) },
      { path: 'cliente', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
