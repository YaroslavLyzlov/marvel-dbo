import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelItemComponent } from './marvel-item/marvel-item.component';

const routes: Routes = [
  { path: '',
    component: MarvelItemComponent
  },
  { path: ':id',
    component: MarvelItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelPageRoutingModule { }
