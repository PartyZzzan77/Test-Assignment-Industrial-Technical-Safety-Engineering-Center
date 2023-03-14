import { Component, Input } from '@angular/core';

import { CardModel } from 'src/app/main/models/car.model';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  card: CardModel;

  isChecked: boolean;

  toggleFavorites() {
    this.cardService.toggleFavorites(this.card);
    this.isChecked = !!this.cardService.favorites.value.length;
  }

  constructor(private cardService: CardsService) {}
}
