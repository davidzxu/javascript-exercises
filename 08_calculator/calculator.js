const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (a) {
    let value = 0;
    for (i = 0; i < a.length; i++) {
        value += a[i];
    }
    return value;
};

const multiply = function (a) {
    let value = 1;
    for (i = 0; i < a.length; i++) {
        value *= a[i];
    }
    return value;
};

const power = function (a, b) {
    let value = a;
    for (i = 1; i < b; i++) {
        value *= a;
    }
    return value;
};

const factorial = function (a) {
    let value = 1;
    if (a === 0) {
    } else {
        for (i = a; i > 0; i--) {
            value *= i;
        }
    }
    return value;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
