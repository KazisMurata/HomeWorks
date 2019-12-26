const users = ["Alex", "Jinny", "David", "John", "Alexa", "Diana", "Kate", "Alex", "Jinny", "Diana", "David", "Jinny", "Kate", "Kate", "Alex"];

// С помощью метода reduce необходимо перебрать массив и составить
//  объект, у которого ключ — уникальный элемент массива, значение — 
//  сколько раз он встречается в массиве. Например, перебирая массив 
//  ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'] мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]

let usersQuantity = users.reduce(function(map, name) {
    let count = 0;
    for ( let element of users) {
        if (element === name) {
            count += 1;
            map[name] = count;
        }
    }
    return map;
}, {});

console.log(usersQuantity);



// Документ
// Создать список товаров (массив). У товара должно быть имя его цена и количество.
// Вывести этот список на страницу (имя, цена и количество должны быть выведены с 
// новой строчки). Для каждого второго товара сделать цвет фона серым.

let productList = [
    {name: "apple", quantity: "10kg", price: "5$"},
    {name: "pineapple", quantity: "8kg", price: "12$"},
    {name: "strawberry", quantity: "10kg", price: "5$"},
    {name: "melon", quantity: "20kg", price: "3$"},
    {name: "watermelon", quantity: "25kg", price: "4$"},
    {name: "blackberry", quantity: "18kg", price: "15$"},
];


let div = document.createElement('div');
document.body.append(div);

for (let i = 0; i < productList.length; i++) { 

    let el = document.createElement('div');
    div.appendChild(el);

    for (let key in productList[i]) {   
        ([i + 1] % 2 === 0) ? el.style.backgroundColor = "grey" : false;
        el.style.padding = '05px 10px';

        let p = document.createElement('p');   
        p.append(productList[i].innerHTML = `${key}: ${productList[i][key]} ` ); 
        el.appendChild(p);                
    }
}




