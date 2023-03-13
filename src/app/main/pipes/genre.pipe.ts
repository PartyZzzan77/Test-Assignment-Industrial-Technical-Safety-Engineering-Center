import { Pipe, PipeTransform } from '@angular/core';
import { CardModel } from '../models/car.model';

@Pipe({
  name: 'genre',
})
export class GenrePipe implements PipeTransform {
  transform(value: CardModel): CardModel {
    return {
      ...value,
      genre: value.genre.map((v) => {
        if (v === 1) return ' драма';
        if (v === 2) return ' биография';
        if (v === 3) return ' история';
        if (v === 4) return ' фэнтези';
        if (v === 5) return ' приключения';
        if (v === 6) return ' боевик';
        if (v === 7) return ' мультфильм';
        if (v === 8) return ' комедия';
        if (v === 9) return ' триллер';
        if (v === 10) return ' детектив';
        if (v === 11) return ' фантастика';
      }),
    };
  }
}
