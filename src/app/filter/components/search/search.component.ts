import { Component } from '@angular/core';
import { CardsService } from '../../../core/services/cards.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public label = 'Введите название';
  public value = '';

  searchFilm(value: string) {
    this.cardService.searchFilm(value);
  }

  clear() {
    this.value = '';
  }
  constructor(private cardService: CardsService) {}
}
