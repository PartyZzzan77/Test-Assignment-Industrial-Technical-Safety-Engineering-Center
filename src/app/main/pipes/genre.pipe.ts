import { Pipe, PipeTransform } from '@angular/core';
import {CardModel} from "../../main/models/car.model";

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: CardModel[]): CardModel[] {
    return [...value].sort()
  }
}
