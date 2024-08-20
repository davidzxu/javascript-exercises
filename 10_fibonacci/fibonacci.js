const fibonacci = function (x) {
    let a = 1;
    let b = 1;
    let newValue;
    x = parseInt(x);
    if (x < 0) {
        return "OOPS";
    } else if (x === 0) {
        return 0;
    } else if (x === 1 || x === 2) {
        return 1;
    } else {
        for (i = 0; i < x - 2; i++) {
            newValue = a + b;
            b = a;
            a = newValue;
        }
        return newValue;
    }
};

// Do not edit below this line
module.exports = fibonacci;
