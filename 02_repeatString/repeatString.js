const repeatString = function(string, num) {

let repeated = "";

    if (num < 0) {
        repeated += "ERROR"
    }

    for (let i = 1; i <= num; i++) {
        repeated += string;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
