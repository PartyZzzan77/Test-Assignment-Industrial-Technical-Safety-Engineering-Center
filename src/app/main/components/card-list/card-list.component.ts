import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CardsService } from 'src/app/core/services/cards.service';
import { CardModel } from 'src/app/main/models/car.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit, OnDestroy {
  public cards: CardModel[];
  private subscription: Subscription;
  ngOnInit() {
    this.subscription = this.cardService.cards.subscribe((serviceCards) => {
      this.cards = serviceCards;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private cardService: CardsService) {}
}
