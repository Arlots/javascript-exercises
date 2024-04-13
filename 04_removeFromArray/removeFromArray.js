const removeFromArray = function (array, ...args) {
    const newArray = [];
  
    for (item of array) {
      if (!args.includes(item)) { // if ...args does include ITEM push item into newArray
          newArray.push(item);
      }};
  
      return newArray;
  }

// Do not edit below this line
module.exports = removeFromArray;


//removeFromArray([1, 2, 2, 3], 2)