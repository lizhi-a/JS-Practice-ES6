'use strict';

function average_uneven(collection) {

  //在这里写入代码
  collection = collection.filter( (n) => {
    return n%2 == 1;
  })
  var length = collection.length;
  collection = collection.reduce( (prev,cur) => {
    return prev+cur;
  })
  return collection/length;
}

module.exports = average_uneven;
