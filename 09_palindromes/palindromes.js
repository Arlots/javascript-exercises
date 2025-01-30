const palindromes = function (palindrome) {

    const palindromeArray = Array.from(palindrome);
    
    const filteredPalindrome = palindromeArray.filter(function (letter) {
        if (letter == '!' || letter == ',' || letter == '.' || letter == ' ') {
            return false;
        } else {
            return true;
        }
    });
    const toBeReversed = filteredPalindrome.slice();
    
    const reversedArray = toBeReversed.reverse();

    let finalFilter = filteredPalindrome.toString().toLowerCase();
    let finalReverse = reversedArray.toString().toLowerCase();
    
    console.log(filteredPalindrome);
    console.log(finalFilter);
    console.log(reversedArray);
    console.log(finalReverse);
    
        
    if (finalFilter  === finalReverse) {
        return true;
    } else if (finalFilter  != finalReverse) {
        return false;
    }
    

};

// Do not edit below this line
module.exports = palindromes;
