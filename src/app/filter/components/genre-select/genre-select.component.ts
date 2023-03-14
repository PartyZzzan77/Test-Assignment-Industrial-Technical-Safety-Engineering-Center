import { Component } from '@angular/core';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.scss'],
})
export class GenreSelectComponent {
  currentValue = { name: '--' };
  sortByGenre(value: string) {
    this.cardService.sortByGenre(value);
  }

  animals = [
    { name: 'Все' },
    { name: 'драма' },
    { name: 'биография' },
    { name: 'история' },
    { name: 'фэнтези' },
    { name: 'приключения' },
    { name: 'боевик' },
    { name: 'мультфильм' },
    { name: 'комедия' },
    { name: 'триллер' },
    { name: 'детектив' },
    { name: 'фантастика' },
  ];

  constructor(private cardService: CardsService) {}
}
