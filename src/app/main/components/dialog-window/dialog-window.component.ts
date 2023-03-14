import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CardModel } from 'src/app/main/models/car.model';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss'],
})
export class DialogWindowComponent {
  public toggleTitle = 'Удалить из лучших фильмов';

  public btnClose = 'Закрыть';

  public toggleFavorites() {
    this.cardService.toggleFavorites(this.data.property);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { property: CardModel; isChecked: boolean },
    private cardService: CardsService,
  ) {}
}
