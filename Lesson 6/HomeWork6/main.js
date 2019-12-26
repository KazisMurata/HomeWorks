// 1) площадь круга

function CircleSquare(radius) {
    this.radius = radius;
    this.calculateSquare = function () {
        return +(Math.PI * (this.radius ** 2)).toFixed(2);
    }
}

let circleSquare = new CircleSquare(5);

console.log (circleSquare.calculateSquare());



// 2) длину окружности

function CircleLength(radius) {
    this.radius = radius;
    this.calculateLengthOfCircle = function () {
        return +(2 * Math.PI * this.radius).toFixed(2);
    }
}

let circleLength = new CircleLength(7);

console.log (circleLength.calculateLengthOfCircle());



// 3) среднее арифметическое двух чисел

function ArithmeticAverage(a, b) {
    this.a = a;
    this.b = b;
    this.calculateArithmeticAverage = function () {
        return (this.a + this.b) / 2;
    }
}

let arithmeticAverage = new ArithmeticAverage(10, 30);

console.log (arithmeticAverage.calculateArithmeticAverage());



// 4) среднее арифметическое массива

let arrNumbers = [12, 23, 44, 41, 32, 78, 66, 48];

function ArithmeticAverageInArr(arrNumbers) {
    this.arrNumbers = arrNumbers;
    this.calculateArithmeticAverage = function () {
        let arithmeticAverage = 0;
        let count = 0;
        for ( let i = 0; i < arrNumbers.length; i++) {
            count += arrNumbers[i];
            arithmeticAverage = count / (i + 1);
        }
        return arithmeticAverage;
    }
}

let arithmeticAverageInArr = new ArithmeticAverageInArr(arrNumbers);

console.log (arithmeticAverageInArr.calculateArithmeticAverage());


// Примеры использования:
// Думаю что при помощи таких функций конструкторов можно создать инженерный калькулятор.
// Или решать сложные алгебраические и геометрические задачи.