// написать функцию generateList(array)
// принимает массив из чисел и массивов чисел, например [1,2, [1.1,1.2,1.3] ,3]
// нужно сгенерировать список из элементов, а если в массиве встречается массив то делать вложенный список


let arr = [1,2,[1.1,1.2,1.3,1.4,[2.1,2.2,2.3,[3.1,3.2,3.3,[4.1,4.2,4.3,4.4],3.4,3.5]]],3,4,5,6];


function generateList(array) {
    const ul = document.createElement('ul');
    array.forEach(function(item) {       
        const li = document.createElement('li');
        ul.appendChild(li);
        Array.isArray(item) ? li.appendChild(generateList(item)) : li.append(item.innerHTML = item);   
    });
    return ul;
}

document.querySelector('body').appendChild(generateList(arr));



