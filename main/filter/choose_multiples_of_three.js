'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var array = [];
  array = collection.filter( (num) => num%3==0)
  return array;
}

module.exports = choose_multiples_of_three;
