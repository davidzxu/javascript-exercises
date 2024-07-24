const repeatString = function (text, numOfRepeats) {
    let returnText = "";
    if (numOfRepeats < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < numOfRepeats; i++) {
            returnText += text;
        }
        return returnText;
    }
};

// Do not edit below this line
module.exports = repeatString;
