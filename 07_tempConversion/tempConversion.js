const convertToCelsius = function (tempInF) {
    let tempInC = Math.round((tempInF - 32) * (5 / 9) * 10) / 10;
    return tempInC;
};

const convertToFahrenheit = function (tempInC) {
    let tempInF = Math.round(((tempInC * 9) / 5 + 32) * 10) / 10;
    return tempInF;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
