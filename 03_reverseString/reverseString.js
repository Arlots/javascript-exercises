const reverseString = function(string) {
    let stringArray = string.split(""); //this turns string into an array
    let reversedStringArray = []; //creates empty array to hold new string
    let arrLen = stringArray.length - 1;

   for (; arrLen >= 0; arrLen--) { //get array length, and set condition to run until length = 0
            let letter = stringArray[arrLen];
            reversedStringArray.push(letter);
    }
    return reversedStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
