
// Задача

// Написать свои функции apply, bind.
// Внутри использовать только встроенную функцию call.
// Первый параметр это функция, которую необходимо вызовать,
// 2й - контекст, 3й это массив аргументов, с которым функция
// будет вызвана.




function f(a, b, c, d, e, f) {
    console.log(this, 'arg a: ' + a, 'arg b: ' + b, 'arg c: ' + c, d, e, f);
}


function apply(func, context, args) {
    return func.call(context, ...args);
}

apply(f, {}, [1, 2, 3, 4, 5, 6]);




function bind(func, context) {
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let innerArgs = [...arguments];
        let allArgs = bindArgs.concat(innerArgs);
        return func.call(context, ...allArgs);
    }
}

let bindedF = bind(f, {}, 1, 2, 3);

bindedF(4, 5, 6);

