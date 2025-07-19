const sumAll = function(firstInt, secondInt) {
    if(!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
        return 'ERROR';
    }

    if((firstInt < 0 || secondInt < 0)) {
        return "ERROR";
    }

    let start, end;
    if(firstInt < secondInt) {
        start = firstInt;
        end = secondInt;
    } else {
        start = secondInt;
        end = firstInt;
    }

    let curr = start;
    let sum = 0;
    while(curr <= end) {
        sum += curr;
        curr++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
