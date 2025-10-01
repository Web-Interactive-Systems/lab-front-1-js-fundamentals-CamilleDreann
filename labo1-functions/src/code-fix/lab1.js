// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Parameter is not a number!");
    }
    return a + b;
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    const double = function (element) {
      if (typeof element !== 'number') {
        throw new Error('Element is not a number');
      }
      return element * 2;
    };

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    grosMot.forEach((mot) => {
      if (input.includes(mot)) {
        throw new Error('Bad word detected');
      }
    })
    return input;
  },

  nameOfWeekDay(index) {
    const jours = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const jour = jours[index];
    const jourSplit = jour.split('');
    jourSplit.splice(0, 1, jour.charAt(0).toUpperCase());
    return jourSplit.join('');
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    if (!Array.isArray(array)) {
      throw new Error('Input is not an array');
    }
    array.sort((a, b) => a - b);
    return array;
  },

  createCounterFunction(input) {
    function counter() {
      input += 1;
      return input;
    }
    return counter;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    name = `Hello ${name}. Are you well?`;
    return name;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3

    callback(1, 2);

    return null;
  },

  combineArrays(array1, array2) {
    const array3 = array1.concat(array2);
    return array3;
  },

  promiseMeMoney() {
    const maPromesse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("send message");
      }, 300);
    });
    return maPromesse;
  },
};

module.exports = functions;
