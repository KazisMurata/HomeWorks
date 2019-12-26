const users = [
    {name: "Alex", age: 24, gender: "male", salary: 1235},
    {name: "Jinny", age: 17, gender: "female", salary: 1675},
    {name: "David", age: 21, gender: "male", salary: 900},
    {name: "John", age: 16, gender: "male", salary: 1835},
    {name: "Alexa", age: 26, gender: "female", salary: 1115},
    {name: "Diana", age: 16, gender: "female", salary: 1335},
    {name: "Kate", age: 27, gender: "female", salary: 1550},
    {name: "Alex", age: 28, gender: "male", salary: 1935},
];


// 1. Из массива пользователей получить массив их 
//    имен и массив возрастов.

const usersName = users.map (function (usersData) {
    let usersName = usersData.name;
    return usersName;
});

console.log (usersName);


const usersAge = users.map (function (usersData) {
    let usersAge = usersData.age;
    return usersAge;
});

console.log (usersAge);



// 2. На основе первоначального создать новый массив
// пользователей которым есть 18 лет.

let adultAge = users.filter (function (usersData) { 
    return usersData.age >= 18;
});

console.log (adultAge);



// 3. Найти пользователя с конкретным именем и
// возрастом и его индекс в массиве.

let specialUser = users.find (function (usersData) {
    return usersData.name === "Alex" && usersData.age === 28;
});

console.log (specialUser);

console.log (users.indexOf (specialUser));



// 4. Написать свои функции map, filter, которые первым аргументом принимают массив а вторым функцию колбек.

let arr = [23, 45, 65, 12, 89];


function map(array, fn) {
    let newArr = [];
    for ( let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }
    return newArr;
}


let methodMap = map(arr, function(num) {
    return num * 2; 
});

console.log (methodMap);

//  Когда код дойдет до переменной methodMap( или мы вызовим переменную сами)
//  начнет выполняться функция map в которой мы первым аргументом передаем данный
//  нам массив arr и вторым аргументом мы передаем функцию которая принимает значение num,
//  и возращает это же значение или видоизмененное значение если нам надо.
//  Функция(метод) начинает выполнятся с того что принимает аргументы,
//  потом создает новый массив newArr, затем циклом перебирает каждое значение массива array,
//  каждое значение попадает в функцию которую мы указали вторым аргументов в map, после чего
//  значение либо видоизменяется или остается прежним и пушится в новый массив newArr.
//  В конце возращает нам новый массив newArr.
//  Итого, метод map создает новый массив и записывает в него значения из другого массива,
//  может полностью их скопировать либо изменить как нам надо.

function filter(array, fn) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

let methodFilter = filter(arr, function(value) {
    return value > 30;
});

console.log (methodFilter);

//  Когда код дойдет до переменной methodFilter( или мы вызовим переменную сами)
//  начнет выполняться функция filter в которой мы первым аргументом передаем данный
//  нам массив arr и вторым аргументом мы передаем функцию которая принимает значение value,
//  проводит его проверку и возращает нам true или false.
//  Функция(метод) начинает выполнятся с того что принимает аргументы,
//  потом создает новый массив newArr, затем циклом перебирает каждое значение массива array,
//  каждое значение попадает в условие if и проходит проверку функцией которою мы указали
//  вторым аргументом в filter, и если true то функция пушит значение в новый массив newArr.
//  В конце возращает нам новый массив newArr.
//  Итого, метод filter создает новый массив и записывает в него значения из другого массива
//  которые прошли его проверку.
