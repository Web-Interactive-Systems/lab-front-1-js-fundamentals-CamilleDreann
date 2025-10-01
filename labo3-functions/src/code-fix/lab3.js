// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  // const totalNormalItems = order.items...;
  // const shippingItem = order.items...;
  // const shipping = ...;
  orderTotal(order) {
      const totalNormalItems = order.items;
      let total = 0;
      totalNormalItems.forEach(element => {
        if (element.name !== 'Tax') {
          total += element.price * element.quantity;
        }
      });
      if (total < 1000) {
        total += 40;
      }
    return total;
  },

  addPositiveNumbers(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
      let sum = 0;
      array.forEach((num) => {
        const numFormatted = parseInt(num, 10);
        if (numFormatted > 0) {
          sum += numFormatted;
        }
      });
      return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    // for (let i = 0; i < string.length - 1; i++)

    str = string.toUpperCase();
    let index = -1;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1] && str[i] !== ' ') {
        index = i + 1;
        break;
      }
    }
    return index;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's 
  // in this array. If there is any value other than 1 or 0 in the array, 
  // this is an error, return -1. The 1's and 0's may be either string or 
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;
    for (let i = 0; i < array.length; i++) {
      const num = parseInt(array[i], 10);
      if (num !== 0 && num !== 1) {
        return -1;
      }
      if (num === 1) {
        if (currentCount === -1) {
          currentCount = 1;
        } else {
          currentCount += 1;
        }
      } else {
        if (currentCount > maxCount) {
          maxCount = currentCount;
        }
        currentCount = -1;
      }
    }
    //
    // Todo
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
