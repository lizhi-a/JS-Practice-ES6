'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  collection = collection.filter( (n) => {
    return n%2 == 1;
  })
  collection = collection.map((n) => {
    return n*3+5;
  })
  collection = collection.reduce((prev,cur) => {
    return prev+cur;
  })
  return collection;
}

module.exports = hybrid_operation_to_uneven;

