"use strict";

// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Можно добавить добавки:

// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий)


// Напишите программу, расчитывающую стоимость и калорийность гамбургера.
// Используй ООП подход (подсказка: нужен класс Гамбургер,
// константы, методы для выбора опций и рассчета нужных величин).

// Пример работы кода:

// маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());

// сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());


class Hamburger {
  constructor(size, stuffing) {
    this.order = new Set();
    this.order.add(size);
    this.order.add(stuffing);     
  }

  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };
  
  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };
  
  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };
  
  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };
  
  static STUFFING_FRY = {
    price: 15,
    calories: 10,
  };
  
  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
  
  static TOPPING_SPICE = {
    price: 15,
    calories: 0,
  };

  addTopping(topping) {
    this.order.add(topping);
  }

  addStuffing(stuffing) {
    this.order.add(stuffing);
  }

  deleteItem(item) {
    this.order.delete(item);
  }

  calculatePrice() {
    let totalPrice = null;

    for ( let key of this.order) {
      totalPrice += key.price;
    }

    return "Price: " + totalPrice + ' тугриков';
  }

  calculateCalories() {
    let totalCalories = null;

    for ( let key of this.order) {
      totalCalories += key.calories;
    }

    return "Calories: " + totalCalories + ' калорий';
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());

hamburger.deleteItem(Hamburger.STUFFING_CHEESE);
hamburger.addStuffing(Hamburger.STUFFING_FRY);
hamburger.addStuffing(Hamburger.STUFFING_SALAD);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());