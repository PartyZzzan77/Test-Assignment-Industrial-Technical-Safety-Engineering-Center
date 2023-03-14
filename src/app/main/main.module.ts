import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from 'src/app/main/components/card-list/card-list.component';
import { CardComponent } from 'src/app/main/components/card/card.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { GenrePipe } from 'src/app/main/pipes/genre.pipe';
import { DialogWindowComponent } from 'src/app/main/components/dialog-window/dialog-window.component';

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    GenrePipe,
    DialogWindowComponent,
  ],
  imports: [AngularMaterialModule, CommonModule],
  exports: [CardListComponent, CardComponent],
})
export class MainModule {}
