import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GenrePipe } from './pipes/genre.pipe';

@NgModule({
  declarations: [CardListComponent, CardComponent, GenrePipe],
  imports: [AngularMaterialModule, CommonModule],
  exports: [CardListComponent],
})
export class MainModule {}
