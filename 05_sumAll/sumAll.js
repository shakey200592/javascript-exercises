const sumAll = function(smallestNumber, largestNumber) {

    if (smallestNumber < 0 || largestNumber < 0 || 
        !Number.isInteger(smallestNumber) || !Number.isInteger(largestNumber)) return "ERROR";
    
    if (smallestNumber > largestNumber) {
        [smallestNumber,largestNumber] = [largestNumber,smallestNumber]
    }

    let sum = 0;

    for(let i = smallestNumber; i <= largestNumber; ++i) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
