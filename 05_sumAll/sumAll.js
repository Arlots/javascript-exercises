const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (num1 < 0 || num2 < 0 || typeof num2 != "number" || typeof num1 != "number") {
        return "ERROR";
    }

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++){
            finalSum += i;
        }
    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--){
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
