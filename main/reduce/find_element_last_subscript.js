'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  collection = collection.reverse();
  var index = collection.findIndex(n => n==element);
  return collection.length-index-1;
}

module.exports = calculate_elements_sum;
