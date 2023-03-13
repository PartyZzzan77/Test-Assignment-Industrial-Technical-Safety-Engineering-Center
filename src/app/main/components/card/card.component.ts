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

  toggleFavorites() {
    this.cardService.toggleFavorites(this.card);
  }

  constructor(private cardService: CardsService) {}
}
