import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteMovieComponent } from 'src/app/favorite-movie/components/favorite-movie/favorite-movie.component';
import { MainModule } from 'src/app/main/main.module';

@NgModule({
  declarations: [FavoriteMovieComponent],
  imports: [CommonModule, MainModule],
  exports: [FavoriteMovieComponent],
})
export class FavoriteMovieModule {}
