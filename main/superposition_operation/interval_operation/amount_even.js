'use strict';

function amount_even(collection) {

  //在这里写入代码
  collection = collection.filter( (n) => {
    return n%2 == 0;
  })
  collection = collection.reduce( (prev,cur) => {
    return prev+cur;
  })
  return collection;
}

module.exports = amount_even;
