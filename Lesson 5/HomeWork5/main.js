let users = [
    { name:'Andrii', gender:'male', birth: 1992 },
    { name: 'Diana', gender: 'female', birth: 1993 },
    { name: 'John', gender: 'male', birth: 1994 },
    { name: 'Alex', gender: 'male', birth: 1991 },
    { name: 'Jinny', gender: 'female', birth: 1995 },
    { name: 'Dan', gender: 'male', birth: 1990 }
];


// 1. Посчитать средний возраст. Округлить до целого числа.

function calculateMidAgeUsers(array) {
    let midAgeUsers = 0;
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < array.length; i++) {
        midAgeUsers += (currentYear - array[i].birth);
    }
    return Math.round (midAgeUsers / array.length);
}

console.log (calculateMidAgeUsers(users));



// 2. Определить представителей какого пола больше.

function getQualityGenders(array) {
    let male = 0;
    let female = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender === 'male') {
            male += 1;
        } else if (array[i].gender === 'female') {
            female += 1;
        }
    }
    if (male > female) {
        return `${male} male more than ${female} female`;
    }else if (female > male) {
        return `${female} female more than ${male} male`;
    } else if (male === female) {
        return `${male} male and ${female} the same number`;
    }
}

console.log (getQualityGenders(users));



// 3. На основе массива скопировать массив пользователей
// в другой массив сотрудников и добавить им поле зарплата salary.

let employees = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function copyArrayAddSalary(array) {
    for (let i = 0; i < array.length; i++) {
        employees[i] = {};
        for (let key in array[i]) {
            employees[i][key] = array[i][key];
            
        }
        employees[i].salary = getRandomInt(1000, 2000) + " y.e.";   
    }
}

copyArrayAddSalary(users);
console.log (employees);
console.log (users); //Вызов для проверки.