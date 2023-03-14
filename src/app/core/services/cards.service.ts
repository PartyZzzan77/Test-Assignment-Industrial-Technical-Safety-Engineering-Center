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
  public sortByGenre(value: string) {
    if (value === 'Все') {
      this.cards.next(mockCards);
      return;
    }
    const genres: Record<string, string> = {
      драма: '1',
      биография: '2',
      история: '3',
      фэнтези: '3',
      приключения: '4',
      боевик: '5',
      мультфильм: '6',
      комедия: '7',
      триллер: '8',
      детектив: '9',
      фантастика: '10',
    };

    const filteredByGenreCards = mockCards.filter((c) =>
      c.genre.includes(+genres[value]),
    );
    this.cards.next(filteredByGenreCards);
  }
  constructor() {
    const stringifyFilm = localStorage.getItem('film');
    if (stringifyFilm) {
      const film: CardModel = JSON.parse(stringifyFilm);
      this.favorites.next([film]);
    }
  }
}
