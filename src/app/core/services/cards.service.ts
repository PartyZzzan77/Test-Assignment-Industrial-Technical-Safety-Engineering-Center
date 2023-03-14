import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

import { mockCards } from 'src/app/shared/mocks/mockCards';
import { CardModel } from 'src/app/main/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: BehaviorSubject<CardModel[]> = new BehaviorSubject<CardModel[]>(
    mockCards,
  );

  favorites: BehaviorSubject<CardModel[]> = new BehaviorSubject<CardModel[]>(
    [],
  );
  favorites$: Observable<CardModel[]> = this.favorites.asObservable();
  cards$: Observable<CardModel[]> = this.cards.asObservable();

  public toggleFavorites(card: CardModel) {
    this.favorites$.pipe(take(1)).subscribe((v) => {
      if (v.includes(card)) {
        this.favorites.next([]);
        localStorage.clear();
      } else {
        this.favorites.next([card]);
        localStorage.setItem('film', JSON.stringify(card));
      }
    });
  }
  constructor() {
    const stringifyFilm = localStorage.getItem('film');
    if (stringifyFilm) {
      const film: CardModel = JSON.parse(stringifyFilm);
      this.favorites.next([film]);
    }
  }
}
