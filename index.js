// Helper function to check if the input is an object
function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  }
  
  // myEach function
  function myEach(collection, callback) {
    if (Array.isArray(collection) || isObject(collection)) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection) || isObject(collection)) {
      myEach(collection, (value, key, coll) => {
        result.push(callback(value, key, coll));
      });
    }
    return result;
  }
  
  // myReduce function
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    myEach(collection, (value, key, coll) => {
      acc = callback(acc, value, coll);
    });
    return acc;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, coll) => {
      if (predicate(value, key, coll)) {
        result = value;
        return false; // Stop the iteration when a match is found
      }
    });
    return result;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key, coll) => {
      if (predicate(value, key, coll)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize function
  function mySize(collection) {
    let count = 0;
    myEach(collection, () => count++);
    return count;
  }
  
  // Array Functions
  
  // myFirst function
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast function
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // Test the functions
  console.log(myEach([1, 2, 3], alert));
  console.log(myEach({ one: 1, two: 2, three: 3 }, alert));
  console.log(myMap([1, 2, 3], function (num) { return num * 3; }));
  console.log(myMap({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; }));
  console.log(myReduce([1, 2, 3], function (acc, val) { return acc + val; }, 10));
  console.log(myReduce({ one: 1, two: 2, three: 3 }, function (acc, val) { return acc + val; }));
  console.log(myFind([1, 2, 3, 4, 5, 6], function (num) { return num % 2 === 0; }));
  console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function (num) { return num % 2 === 0; }));
  console.log (myFilter([1, 2, 3, 4, 5, 6]), function (num) {}) 