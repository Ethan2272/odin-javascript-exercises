const repeatString = function(stringToRepeat, repetitions) {
    if(repetitions < 0) {
        return 'ERROR';
    }
    let result = '';
    for(i = 0; i < repetitions; i++) {
        result += String(stringToRepeat);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
