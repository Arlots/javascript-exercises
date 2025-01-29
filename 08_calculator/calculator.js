const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const initialValue = 0;
  if (arr[0] === undefined) {
    return initialValue;
  }
  const sumAll = arr.reduce((total, currentValue) => total + currentValue, initialValue
  
)
return sumAll;
};

const multiply = function(arr) {
const initialValue = 1;
const productAll = arr.reduce((total, currentValue) => total * currentValue, initialValue); 
return productAll;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  
  if (a === 0 || a === 1) {
    return 1;
  }
  
  for (i = a-1 ; i >= 1; i--) {
    a *= i;
  }

  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
