import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CardModel } from 'src/app/main/models/car.model';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit, OnDestroy {
  public card: CardModel;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.cardService.favorites.subscribe((v) => {
      this.card = v[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private cardService: CardsService) {}
}
