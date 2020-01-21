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
        this.size = size;
        this.stuffing = stuffing;     
    }

    static price = {
        small: 50,
        big: 100,
        cheese: 10,
        french_fry: 15,
        salat: 20,
        mayo: 20,
        spice: 15,
        [Symbol.iterator]: function () {
            var keys = Object.keys(this).sort();
            var index = 0;
            
            return {
              next: function () {
                return {
                  value: keys[index], done: index++ >= keys.length
                };
              }
            }
        }
    }

    static calories = {
        small: 20,
        big: 40,
        cheese: 20,
        french_fry: 10,
        salat: 5,
        mayo: 5,
        spice: 0,
        [Symbol.iterator]: function () {
            var keys = Object.keys(this).sort();
            var index = 0;
            
            return {
              next: function () {
                return {
                  value: keys[index], done: index++ >= keys.length
                };
              }
            }
        }
    }

    static size = {
        small: "small",
        big: "big",
    }

    static stuffing = {
        cheese: "cheese",
        french_fry: "french Fry",
        salat: "salat",

    }

    static topping = {
        mayo: "mayo",
        spice: "spice",
    }

    addTopping(topping) {
        this.topping = topping;
    }

    calculatePrice() { 
        let totalPrice = 0; 
        this[Symbol.iterator] = function () {
            var keys = Object.keys(this).sort();
            var index = 0;
            
            return {
              next: function () {
                return {
                  value: keys[index], done: index++ >= keys.length
                };
              }
            }
          }
        for (let key of this) {
            for (let ingredient of Hamburger.price) {
                if (this[key] === ingredient) {
                    totalPrice += Hamburger.price[ingredient];
                }
            }         
        }
        return totalPrice + ' тугриков';
    }

    calculateCalories() { 
        let totalCalories = null; 
        this[Symbol.iterator] = function () {
            var keys = Object.keys(this).sort();
            var index = 0;
            
            return {
              next: function () {
                return {
                  value: keys[index], done: index++ >= keys.length
                };
              }
            }
          }
        for (let key of this) {
            for (let ingredient of Hamburger.calories) {
                if (this[key] === ingredient) {
                    totalCalories += Hamburger.calories[ingredient];
                }
            }         
        }
        return totalCalories + ' калорий';
    }
}

let hamburger = new Hamburger(Hamburger.size.small, Hamburger.stuffing.cheese);

console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());
hamburger.addTopping(Hamburger.topping.mayo);
console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());
