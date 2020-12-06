'use strict';

function choose_even(collection) {
  //在这里写入代码
  var array = [];
  array = collection.filter( (num) => num%2==0)
  return array;
}

module.exports = choose_even;
