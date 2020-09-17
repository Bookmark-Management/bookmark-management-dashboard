import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../projects/home/src/app/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'manage-groups',
    loadChildren: () => import('../../projects/manage-groups/src/app/manage-groups.module').then((m) => m.ManageGroupsModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
