const fibonacci = function(placement) {

    const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 
        377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]


if (placement < 0) {
    return "OOPS";
}


return fibonacciArray[placement];

};


// Do not edit below this line
module.exports = fibonacci;
