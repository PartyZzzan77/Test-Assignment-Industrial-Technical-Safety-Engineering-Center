import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockCards } from '../../shared/mocks/mockCards';
import { CardModel } from '../../main/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: BehaviorSubject<CardModel[]> = new BehaviorSubject(mockCards);

  cards$: Observable<CardModel[]> = this.cards.asObservable();
}
