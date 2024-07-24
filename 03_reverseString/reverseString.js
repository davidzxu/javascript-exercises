const reverseString = function (string) {
    let returnString = "";
    for (let i = string.length - 1; i > -1; i--) {
        returnString += string[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
