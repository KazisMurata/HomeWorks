"use strict";

// 0. Переписать задание с гамбургером на es5.

let hamburgerItems = {
  SIZE_SMALL: {
    price: 50,
    calories: 20,
  },
  
  SIZE_BIG: {
    price: 100,
    calories: 40,
  },
  
  STUFFING_CHEESE: {
    price: 10,
    calories: 20,
  },
  
  STUFFING_SALAD: {
    price: 20,
    calories: 5,
  },
  
  STUFFING_FRY: {
    price: 15,
    calories: 10,
  },
  
  TOPPING_MAYO: {
    price: 20,
    calories: 5,
  },
  
  TOPPING_SPICE: {
    price: 15,
    calories: 0,
  },
};

let hamburgerMethods = {
  addSize(size) {
    this.order.add(size);
  },

  addTopping(topping) {
    this.order.add(topping);
  },

  addStuffing(stuffing) {
    this.order.add(stuffing);
  },

  deleteItem(item) {
    this.order.delete(item);
  },

  calculatePrice() {
    let totalPrice = null;

    for ( let key of this.order) {
      totalPrice += key.price;
    }

    return "Price: " + totalPrice + ' тугриков';
  },

  calculateCalories() {
    let totalCalories = null;

    for ( let key of this.order) {
      totalCalories += key.calories;
    }

    return "Calories: " + totalCalories + ' калорий';
  },
};

function Hamburger() {
  this.order = new Set();
};

Hamburger.prototype = Object.create(hamburgerItems);
hamburgerItems.__proto__ = hamburgerMethods;

let hamburger = new Hamburger();

hamburger.addSize(hamburger.SIZE_SMALL);
hamburger.addStuffing(hamburger.STUFFING_CHEESE);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());

hamburger.addTopping(hamburger.TOPPING_MAYO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());

hamburger.deleteItem(hamburger.STUFFING_CHEESE);
hamburger.addStuffing(hamburger.STUFFING_FRY);
hamburger.addStuffing(hamburger.STUFFING_SALAD);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());



// 1. Написать, используя класс

class Student {
  constructor(gender, name, surname, birth) {
    this.person = new Set();
    this.person.add(gender);
    this.person.add(name);
    this.person.add(surname);
    this.person.add(new Date().getFullYear() - birth);
  }

  assessment() {
    this.assessment = [...arguments];
    return this.assessment;
  }

  attendance = new Array(25);

  present() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = true;
        break;
      }
    }
  }

  absent() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = false;
        break;  
      }
    }
  }

  summary() {
    this.attendance.splice(25);

    this.midleOfAssessment = null;
    this.midleOfAttendance = null;

    for (let key of this.assessment) {
      this.midleOfAssessment += key;
    }
    this.midleOfAssessment = this.midleOfAssessment / this.assessment.length;

    for (let key of this.attendance) {
      if (key === true) {
        this.midleOfAttendance += 1;
      }
    }
    this.midleOfAttendance = this.midleOfAttendance / this.attendance.length;

    if (this.midleOfAttendance > 0.9 && this.midleOfAssessment > 90) {
      if (this.person.has('male')) {
        this.person.add("Ути какой молодчинка!");
      } else {
        this.person.add("Ути какая молодчинка!");
      }
      return this.person;
    } else if (this.midleOfAttendance > 0.9 || this.midleOfAssessment > 90) {
      this.person.add("Норм, но можно лучше")
      return this.person;
    } else {
      this.person.add("Редиска!")
      return this.person;
    }
  }

};

let student = new Student('male', 'Andrii', 'Skoropupov', 1992);

student.assessment(90,100,80,90,100,90,90,100,90,90,90,70,100,90,90,90,90,90,80,80,90,90,90,90,90);
student.present();student.present();student.present();student.present();student.present();
student.present();student.present();student.present();student.present();student.present();
student.present();student.present();student.present();student.present();student.present();
student.present();student.present();student.present();student.absent();student.present();
student.present();student.present();student.present();student.present();student.absent();
console.log (student.summary());


let student2 = new Student('female', 'Jinny', 'Grave', 1993);

student2.assessment(100,100,80,90,100,90,90,100,90,90,90,100,100,90,90,90,90,90,80,100,90,90,90,90,90);
student2.present();student2.present();student2.present();student2.present();student2.present();
student2.present();student2.present();student2.present();student2.present();student2.present();
student2.present();student2.present();student2.present();student2.present();student2.present();
student2.present();student2.present();student2.present();student2.present();student2.present();
student2.present();student2.present();student2.present();student2.present();student2.absent();
console.log (student2.summary());


let student3 = new Student('male', 'Jhon', 'Smith', 1991);

student3.assessment(60,70,80,90,50,90,90,20,90,50,40,40,30,90,90,90,90,90,80,20,90,90,90,90,90);
student3.present();student3.present();student3.present();student3.present();student3.present();
student3.present();student3.absent();student3.present();student3.absent();student3.present();
student3.present();student3.present();student3.absent();student3.absent();student3.present();
student3.present();student3.absent();student3.absent();student3.present();student3.present();
student3.present();student3.present();student3.present();student3.present();student3.absent();
console.log (student3.summary());