import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

import { mockCards } from 'src/app/shared/mocks/mockCards';
import { CardModel } from 'src/app/main/models/car.model';
import { FiltersConfig } from '../models/filters-config';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  genres: Record<string, string> = {
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
  }; //TODO need to make it better 😝⌛️

  cards: BehaviorSubject<CardModel[]> = new BehaviorSubject<CardModel[]>(
    mockCards,
  );

  favorites: BehaviorSubject<CardModel[]> = new BehaviorSubject<CardModel[]>(
    [],
  );
  favorites$: Observable<CardModel[]> = this.favorites.asObservable();
  cards$: Observable<CardModel[]> = this.cards.asObservable();

  filtersConfig: FiltersConfig = {
    genreTouched: false,
    currentGenre: '',
    inputTouched: false,
    currentSearch: '',
  };

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
      this.filtersConfig.genreTouched = false;
      this.filtersConfig.currentGenre = '';

      this.cards.next(mockCards);
      return;
    }

    const genreByOrder = Number(this.genres[value]);

    if (this.filtersConfig.inputTouched) {
      const filteredBySearchAndGenre = this.filteredByGenre(
        this.cards.value,
        genreByOrder,
      );
      this.cards.next(filteredBySearchAndGenre);
      return;
    }

    const filteredByGenreCards = this.filteredByGenre(mockCards, genreByOrder);

    this.filtersConfig.genreTouched = true;
    this.filtersConfig.currentGenre = `${genreByOrder}`;
    this.cards.next(filteredByGenreCards);
  }

  public searchFilm(value: string) {
    if (!value) {
      this.filtersConfig.inputTouched = false;
    } else {
      this.filtersConfig.inputTouched = true;
      this.filtersConfig.currentSearch = value;
    }

    if (!this.filtersConfig.genreTouched) {
      this.cards.next(this.filteredByName(mockCards, value));
    } else {
      if (!value) {
        this.cards.next(
          this.filteredByGenre(mockCards, +this.filtersConfig.currentGenre),
        );
      }

      const filteredByGenre = this.filteredByGenre(
        mockCards,
        +this.filtersConfig.currentGenre,
      );
      const filteredByGenreAndSearch = this.filteredByName(
        filteredByGenre,
        value,
      );
      this.cards.next(filteredByGenreAndSearch);
    }
  }
  private filteredByName = (data: CardModel[], value: string): CardModel[] => {
    return data.filter((v) =>
      v.name.trim().toLowerCase().includes(value.trim().toLowerCase()),
    );
  };

  private filteredByGenre = (data: CardModel[], value: number): CardModel[] =>
    data.filter((c) => c.genre.includes(value));

  constructor() {
    const stringifyFilm = localStorage.getItem('film');
    if (stringifyFilm) {
      const film: CardModel = JSON.parse(stringifyFilm);
      this.favorites.next([film]);
    }
  }
}
