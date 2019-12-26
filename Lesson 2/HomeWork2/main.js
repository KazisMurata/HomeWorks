let userAge = 0;

let userName = null;

while (true) {
    userName = prompt ('Как вас зовут?', '');
    if (isNaN(userName)) {
        break;   
    } else if (userName === null) {
        alert ('Отмена');
        break;
    } else if (userName === ''){
        alert ('Пусто!Попробуйте ещё раз!')
    } else {
        alert ('Не буквы! Попробуйте ещё раз!');;  
    }
  }

while (true) {
    userAge = prompt ('Сколько вам лет?', '');   // Убрал + перед промт так как не получались 
    if (Number.isNaN(+userAge)) {                // проверки на null и пустую строку.
        alert ('Не число! Поробуйте ещё раз!');   
    } else if (userAge === null) {
        alert ('Отмена');
        break;
    } else if (userAge === '') {
        alert ('Пусто!Попробуйте ещё раз!');
    } else {
        +userAge;                                // Могу ли я сделать так?
        break;  
    }
  }


if (userAge >= 11 && userAge <= 14 || userAge >= 111 && userAge <= 114 ) {
    alert (`Здравствуйте ${userName}, ${userAge} лет`);
} else if (userAge % 10 === 1 ) {
    alert (`Здравствуйте ${userName}, ${userAge} год`);
} else if (userAge % 10 === 2 || userAge % 10 === 3 || userAge % 10 === 4) {
    alert (`Здравствуйте ${userName}, ${userAge} года`);
} else {
    alert (`Здравствуйте ${userName}, ${userAge} лет`);
}



