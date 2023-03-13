import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardsService} from "../../core/services/cards.service";
import {CardModel} from "../models/car.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit,OnDestroy {

  public cards:CardModel[]
  private subscription:Subscription
  ngOnInit() {
    this.subscription=this.cardService.cards.subscribe(serviceCards=>{
      this.cards=serviceCards
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  constructor(private cardService:CardsService) {}
}
