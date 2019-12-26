let arr = [
    [16,-37,54,-4,72],
    [-56,47,4,-16,25],
    [-63,4,-54,76,-4],
    [12,-35,4,47]
  ];

// 1. Найти сумму и количество положительных элементов.

function calculatePositiveElSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                sum += array[i][j];
            }
        }   
    }
    return sum;
}

console.log (calculatePositiveElSum(arr));


function getQuantityPositiveEl(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                count += 1;
            }
        }   
    }
    return count;
}

console.log (getQuantityPositiveEl(arr));



// 2. Найти минимальный элемент массива и его порядковый номер.

function getMinEl(array) {
    let minEl = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                if (array[i][j] < minEl) {
                    minEl = array[i][j];
                }
            }
        }
    }
    return minEl;
}

console.log (getMinEl(arr));


function getIndexMinEl(array) {
    let minEl = 0;
    let indexMinEl = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                if (array[i][j] < minEl) {
                    minEl = array[i][j];
                    indexMinEl = [i, j];                    
                }
            }           
        }       
    }
    return indexMinEl;
}

console.log (getIndexMinEl(arr));



// 3. Найти максимальный элемент массива и его порядковый номер.

function getMaxEl(array) {
    let maxEl = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                if (array[i][j] > maxEl) {
                    maxEl = array[i][j];
                }
            }
        }
    }
    return maxEl;
}

console.log (getMaxEl(arr));


function getIndexMaxEl(array) {
    let maxEl = 0;
    let indexMaxEl = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                if (array[i][j] > maxEl) {
                    maxEl = array[i][j];
                    indexMaxEl = [i, j];                                       
                }                          
            }                      
        }       
    }
    return indexMaxEl;
}

console.log (getIndexMaxEl(arr));



// 4. Определить количество отрицательных элементов.

function getQuantityNegativeEl(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                count += 1;
            }
        }   
    }
    return count;
}

console.log (getQuantityNegativeEl(arr));



// 5. Найти количество нечетных положительных элементов.

function getQuantityOddPositiveEl(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                if (array[i][j] % 2 !== 0) {
                    count += 1;
                }
            }
        }   
    }
    return count;
}

console.log (getQuantityOddPositiveEl(arr));



// 6. Найти количество четных положительных элементов.

function getQuantityEvenPositiveEl(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                if (array[i][j] % 2 === 0) {
                    count += 1;
                }
            }
        }   
    }
    return count;
}

console.log (getQuantityEvenPositiveEl(arr));



// 7. Найти произведение положительных элементов.

function calculateMultiplyPositiveEl(array) {
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                count *= array[i][j];
            }
        }   
    }
    return count;
}

console.log (calculateMultiplyPositiveEl(arr));