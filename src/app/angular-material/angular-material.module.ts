import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

const sharedUI = [MatCardModule, MatGridListModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...sharedUI],
  exports: [...sharedUI],
})
export class AngularMaterialModule {}
