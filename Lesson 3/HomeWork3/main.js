//Дан массив

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// 12 Взять еще один массив
let arr2 = [46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37];
let arr3 = [];


// 1 Задача (Найти сумму и количество положительных элементов.)

let positiveNumbers = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveNumbers.push(arr[i]);
        sum += arr[i];
    }
}

console.log (positiveNumbers.length);
console.log (sum);



// 2 Задача (Найти минимальный элемент массива и его порядковый номер.)

let minNumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
}

console.log (minNumber);
console.log (arr.indexOf(minNumber));



// 3 Задача (Найти максимальный элемент массива и его порядковый номер)

let maxNumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
}

console.log (maxNumber);
console.log (arr.indexOf(maxNumber));



// 4 Задача (Определить количество отрицательных элементов.)

let minNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        minNumbers.push(arr[i]);
    }
}

console.log (minNumbers.length);



// 5 Задача (Найти количество нечетных положительных элементов.)

let oddPositiveNumber = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            continue;
        } else {
            oddPositiveNumber.push(arr[i]); 
        }
    }
}

console.log (oddPositiveNumber.length);



// 6 Задача (Найти количество четных положительных элементов.)

let evenPositiveNumber = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            evenPositiveNumber.push(arr[i]);
        }
    }
}

console.log (evenPositiveNumber.length);



// 7 Задача (Найти сумму четных положительных элементов.)


let sumEvenPositiveNumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            sumEvenPositiveNumber += arr[i];
        }
    }
}

console.log (sumEvenPositiveNumber);



// 8 Задача (Найти сумму нечетных положительных элементов)

let sumOddPositiveNumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            continue;
        } else {
            sumOddPositiveNumber += arr[i];           
        }
    }
}

console.log (sumOddPositiveNumber);



// 9 Задача (Найти произведение положительных элементов.)

let multiplicationPositiveNumbers = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        multiplicationPositiveNumbers *= arr[i];
    }
}

console.log (multiplicationPositiveNumbers);



// 10 Задача (Определить количество элементов, равных 4.)

let sameNumber = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        sameNumber.push(arr[i]);
    }
}

console.log (sameNumber.length);



// 11 Задача (Найти наибольший среди элементов массива, остальные обнулить.)

let arrMaxNumber = [];

for ( let i = 0; i < arr.length; i++) {
    if (arr[i] < maxNumber) {
        arrMaxNumber.push(0);
    } else if (arr[i] === maxNumber) {
        arrMaxNumber.push(maxNumber);
    }
}

console.log (arrMaxNumber);



//13 Задача (Вычислить разность соответствующих элементов массивов и записать в новый массив)

for (let i = 0; i < arr.length; i++) {
   arr3.push(arr[i]-arr2[i]);
}

console.log (arr3);

