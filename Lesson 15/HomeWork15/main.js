"use strict";

// 1 ClassWork

let obj = {
    addItem(item) {
        this.items.push(item);
    },

    removeItem(item) {
        this.items = this.items.filter(el => el !== item);
    },

    getItems() {
        return this.items;
    }
};

function Basket() {
    this.items = [];
}

Basket.prototype = obj;

const basket = new Basket();

basket.addItem('firstItem');
basket.addItem('secondItem');
console.log(basket.getItems());
basket.removeItem('firstItem');
console.log(basket.getItems());





// HomeWork
// создать 3 объкта (objA, objB, objC) Придумать как 
// минимум 1 свойство и 1 метод каждому объекту.

// Прототипом objC дожен быть objB, а прототипом 
// objB должен быть objA.



// Реализовать цепочку протитопов с помощью Object.create.

// let objA = new Object();
// let objB = Object.create(objA);
// let objC = Object.create(objB);



// Реализовать цепочку протитопов с помощью 
// непосредственного изменения прототипа (__proto__, setPrototypeOf)

// let objA = {
//     name: 'Garry',

// };

// let objB = {
    
// };

// let objC = {

// };

// objB.__proto__ = objA;
// objC.__proto__ = objB;



// Реализовать цепочку протитопов с помощью функций конструкторов.

function AnimalFood() {
    // Так почему-то не работает!
    
    // this.setFood = function(food) {
    //     this.animalData.food = food;
    // }

    // this.getFood = function() {
    //     return this.animalData.food;
    // }   
}   

function AnimalName() {
    // Так почему-то не работает!

    // this.setName = function(name) {
    //     this.animalData.name = name;
    // }

    // this.getName = function() {
    //     return this.animalData.name;
    // }
}

function AnimalItems() {
    // Так почему-то не работает!

    // this.currentAnimalItems = function() {
    //     return this.animalData;
    // }
    
    // this.deleteAnimalItem = function(item) {
    //     if (item === name) {
    //         delete this.animalData.name;
    //     } else if (item === food) {
    //         delete this.animalData.food;
    //     }
    // }
    
}

function Animal() {
    this.animalData = {};
}


AnimalFood.prototype.setFood = function(food) {
    this.animalData.food = food;
}
AnimalFood.prototype.getFood= function() {
    return this.animalData.food;
}
AnimalFood.prototype.constructor = AnimalFood;


AnimalName.prototype = Object.create(AnimalFood.prototype);
AnimalName.prototype.setName = function(name) {
    this.animalData.name = name;
}
AnimalName.prototype.getName = function() {
    return this.animalData.name;
}
AnimalName.prototype.constructor = AnimalName;


AnimalItems.prototype = Object.create(AnimalName.prototype);
AnimalItems.prototype.currentAnimalItems = function() {
    return this.animalData;
}
AnimalItems.prototype.deleteAnimalItem = function(item) {
    if (item === name) {
        delete this.animalData.name;
    } else if (item === food) {
        delete this.animalData.food;
    }
}
AnimalItems.prototype.constructor = AnimalItems;


Animal.prototype = Object.create(AnimalItems.prototype);
Animal.prototype.constructor = Animal;

let fox = new Animal();
let wolf = new Animal();
let monkey = new Animal();

wolf.setName('wolf');
fox.setName('fox');
monkey.setName('monkey');

console.log(wolf.getName());
console.log(fox.getName());
console.log(monkey.getName());

wolf.setFood('Deer, moose, wild boar'); 
fox.setFood('Small mammals, birds, reptiles, frogs, eggs, insects');
monkey.setFood('Nuts, fruits, seeds and flowers');

console.log(wolf.getFood());
console.log(fox.getFood());
console.log(monkey.getFood());

console.log(wolf.currentAnimalItems());
console.log(fox.currentAnimalItems());
console.log(monkey.currentAnimalItems());

wolf.deleteAnimalItem(name);
console.log(wolf.currentAnimalItems());
