// 1.Написать функцию makeAdder, которая должна работать следующим образом:

function makeAdder() {
    let val = 0;
    return function (a) {
        return a ? val += a : val += 0;
    }
}

let adder = makeAdder(10);

console.log (adder());
console.log (adder(2));
console.log (adder(10));

// 2.Написать функцию createCounter, которая будет работать следующим образом.
// counter.gerCurrent() // 10;
// couner.increment() // 11
// counter.gerCurrent() // 11;
// counter.decrement() // 10;
// counter.decrement() // 9;
// counter.gerCurrent() // 9;
// counter.setValue(90) // 90
// counter.gerCurrent() // 90;
// counter.reset() // 10; // reset to initial value that was passed to createCounter function
// counter.gerCurrent() // 10;

function createCounter(n) {
    // const param = n;
    let val = n;
    return {
        gerCurrent: function() {
            return val;
        },

        increment: function() {
            return ++val;
        },

        decrement: function() {
            return --val;
        },

        setValue: function(v) {
            return val = v;
        },

        reset: function() {
            return val = n;
        }
    }
    
}

let counter = createCounter(10);



console.log (counter.gerCurrent());
console.log (counter.increment());
console.log (counter.gerCurrent());
console.log (counter.decrement());
console.log (counter.decrement());
console.log (counter.gerCurrent());
console.log (counter.setValue(90));
console.log (counter.gerCurrent());
console.log (counter.reset());
console.log (counter.gerCurrent());

