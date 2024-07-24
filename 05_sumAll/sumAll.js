const sumAll = function (a, b) {
    let sum = 0;
    let lowerValue = 0;
    let higherValue = 0;
    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
        if (a < b) {
            lowerValue = a;
            higherValue = b;
        } else {
            lowerValue = b;
            higherValue = a;
        }
        for (lowerValue; lowerValue !== higherValue + 1; lowerValue++) {
            sum += lowerValue;
        }
    } else {
        sum = "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
