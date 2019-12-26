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
        console.log(this.items);
    }
};

function Basket() {
    this.items = [];
}

Basket.prototype = obj;

const basket = new Basket();

basket.addItem('firstItem');
basket.addItem('secondItem');
basket.getItems();
basket.removeItem('firstItem');
basket.getItems();




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

let objA = {
    animalFood1: 'Deer, moose, wild boar',
    animalFood2: 'Small mammals, birds, reptiles, frogs, eggs, insects',
    animalFood3: 'Nuts, fruits, seeds and flowers',

    setFood(food) {
        this.animalItems.food = food;
    },

    getFood() {
        console.log(this.animalItems.food);
    }
};

let objB = {
    animalName1: 'Monkey',
    animalName2: 'Fox',
    animalName3: 'Wolf',

    setName(name) {
        this.animalItems.name = name;
    },

    getName() {
        console.log(this.animalItems.name);
    },

};

let objC = {

    currentAnimalItems() {
        console.log(this.animalItems);
    },

    deleteAnimalItem(item) {
        if (item === name) {
            delete this.animalItems.name;
        } else if (item === food) {
            delete this.animalItems.food;
        }
    }

};

function Animal() {
    this.animalItems = {};
}

Animal.prototype = objC;
objC.__proto__ = objB;
objB.__proto__ = objA;

let fox = new Animal();
let wolf = new Animal();
let monkey = new Animal();

wolf.setName(fox.animalName3);
fox.setName(fox.animalName2);
monkey.setName(fox.animalName1);

wolf.getName();
fox.getName();
monkey.getName();

wolf.setFood(wolf.animalFood1); 
fox.setFood(wolf.animalFood2);
monkey.setFood(wolf.animalFood3);

wolf.getFood();
fox.getFood();
monkey.getFood();

wolf.currentAnimalItems();
fox.currentAnimalItems();
monkey.currentAnimalItems();

wolf.deleteAnimalItem(name);
wolf.currentAnimalItems();
