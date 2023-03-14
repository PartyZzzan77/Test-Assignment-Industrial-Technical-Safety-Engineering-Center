import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from 'src/app/shared/components/shared/shared.component';
import { MainModule } from 'src/app/main/main.module';
import { FavoriteMovieModule } from 'src/app/favorite-movie/favorite-movie.module';
import { FilterModule } from '../filter/filter.module';
@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, MainModule, FavoriteMovieModule, FilterModule],
})
export class SharedModule {}
