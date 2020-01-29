import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'marvel', pathMatch: 'full' },
  { path: 'marvel', loadChildren: 'src/app/marvel-page/marvel-page.module#MarvelPageModule' },
  { path: 'dashboard', loadChildren: 'src/app/marvel-dashboard/marvel-dashboard.module#MarvelDashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
