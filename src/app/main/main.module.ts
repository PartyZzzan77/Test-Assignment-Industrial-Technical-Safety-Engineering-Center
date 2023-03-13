import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from 'src/app/main/components/card-list/card-list.component';
import { CardComponent } from 'src/app/main/components/card/card.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { GenrePipe } from 'src/app/main/pipes/genre.pipe';

@NgModule({
  declarations: [CardListComponent, CardComponent, GenrePipe],
  imports: [AngularMaterialModule, CommonModule],
  exports: [CardListComponent, CardComponent],
})
export class MainModule {}
