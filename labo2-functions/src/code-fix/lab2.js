// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    const squared =  (n) => n * n;
    return numbers.map(squared);
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    const filteredStrings = strings.filter((string) => string.includes('a'));
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    const sum = 0;
    const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,sum);
    return sumWithInitial;
  },

  // removes last element of an array and returns it
  helper1(array) {
    const lastElement = array.pop();
    return lastElement;
  },

  // add one element to an array
  helper2(array, newOne) {
    array.push(newOne);
    return array;
  },

  // removes first element from an array and returns a new array
  helper3(array) {
    const newArray = array.shift();
    return newArray;
  },

  // add elements to the top of an array
  helper4(array, ...elements) {
    array.unshift(...elements);
    return array;
  },


  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(array, start, deleteCount, ...items) {
    return array.splice(start, deleteCount, ...items);;
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return array.slice(start, end);;
  },

  // concat two arrays
  helper7(arr1, arr2) {
    const newTab = arr1.concat(arr2);
    return newTab;
  },

  // should return the index of the first occurrence of the specified element
  helper8(array, element) {
    const val = array.indexOf(element);
    return val;
  },

  // should return true if the value is present in the array, otherwise false
  helper9(array, value) {
    const elementToFind = el => el === value;
    const elementStatus = array.some(elementToFind);
    return elementStatus;
  },

  // should return the first element that satisfies the callback function
  helper10(array, callback) {
    return array.find(callback);
  },

  // should return index of the first element that satisfies the provided testing function
  helper11(array, predicate) {
    return array.findIndex(predicate);
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(array, callback) {
    console.log(array.every(callback), 'dsdsdsdsdsdssdsd')
    return array.every(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(array, funcCallback) {
    console.log(array.some(funcCallback), 'vroum')
    return array.some(funcCallback);
  },

  // an array of strings with ',' separator returns the correct string 
  helper14(array, separator) {
    return array.join(separator);
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    let sum = 0;
    const sumCallback = (num) => sum += num;
    numbers.forEach(sumCallback);
    return sum;

  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    // sum
    let sum = 0;
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const doubledNumbers = evenNumbers.map((num) => num * 2);
    doubledNumbers.forEach((num) => sum += num);
    return sum;
  },
};

module.exports = functions;
