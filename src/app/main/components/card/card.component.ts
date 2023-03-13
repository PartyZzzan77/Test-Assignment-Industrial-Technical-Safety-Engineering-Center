import {Component, Input} from '@angular/core';
import {CardModel} from "../models/car.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input()
  card:CardModel
}
