import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'repos',
    loadChildren: () =>
      import('./repositories/repositories.module').then(
        (m) => m.RepositoriesModule
      ),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping/shopping.module').then(
        (m) => m.ShoppingModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
