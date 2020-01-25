import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelItemComponent } from './marvel-item/marvel-item.component';
import { MarvelPageRoutingModule } from './marvel-page-routing.module';
import { MarvelItemLoaderComponent } from './marvel-item-loader/marvel-item-loader.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MarvelItemComponent, MarvelItemLoaderComponent, LoaderComponent],
  imports: [
    CommonModule,
    MarvelPageRoutingModule
  ]
})
export class MarvelPageModule { }
