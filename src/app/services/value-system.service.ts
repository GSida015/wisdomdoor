import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSystemService {
  heart: number = 10;
  coins: number = 150;

  constructor() { }

  resetHeart(){
    this.heart = 10;
  }

  decreaseHeart(){
    this.heart--
  }

  dailyIncreaseCoin(){
    this.coins + 50
  }

  shoppingDecreaseCoins(value: number) {
    if(this.coins < value){
      alert("There is not enough coins for you to purchase item")
    }else {
      this.coins - value
      alert("your item was successfully bought!")
    }
  }

  testCoinCheck(value: number) {
    if(this.coins < value) {
      alert("you dont have enough coins to enter")
    }else {
      //route
    }
  }
  testDecreaseCoin(value: number) {
    this.coins - value
  }
  testIncreaseCoin(value: number) {
    this.coins + value
  }
}
