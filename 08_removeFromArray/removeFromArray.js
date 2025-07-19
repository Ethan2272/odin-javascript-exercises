const removeFromArray = function(arr, ...elementsToRemove) {
    let result = [];
    arr.forEach((element) => {
        if (!elementsToRemove.includes(element)) {
            result.push(element);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
