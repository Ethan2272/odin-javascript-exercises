const reverseString = function(stringToReverse) {
    let result = '';
    for(i = (stringToReverse.length - 1); i >= 0; i--) {
        result += stringToReverse.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
