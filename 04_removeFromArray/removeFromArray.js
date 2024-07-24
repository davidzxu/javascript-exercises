const removeFromArray = function (array) {
    // Outer loop cycles between all potential arguments to be removed
    for (let i = 0; arguments[i] !== undefined; i++) {
        // Inner loop cycles between all array elements
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                array.splice(j, 1);
                // This ensures two consecutive equal values will both be removed
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
