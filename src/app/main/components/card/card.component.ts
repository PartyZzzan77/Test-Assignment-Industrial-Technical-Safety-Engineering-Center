import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CardModel } from 'src/app/main/models/car.model';
import { CardsService } from 'src/app/core/services/cards.service';
import { DialogWindowComponent } from 'src/app/main/components/dialog-window/dialog-window.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  card: CardModel;
  isChecked: boolean;

  @Input()
  isDetails = false;

  toggleFavorites() {
    this.cardService.toggleFavorites(this.card);
    this.isChecked = !!this.cardService.favorites.value.length;
  }

  openDialog(event: MouseEvent) {
    event.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { property: this.card };
    const dialogRef = this.dialog.open(DialogWindowComponent, dialogConfig);
    dialogRef.afterClosed();
  }

  constructor(private cardService: CardsService, public dialog: MatDialog) {}
}
