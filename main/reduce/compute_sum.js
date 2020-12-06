'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  collection = collection.reduce(function(pre,cur){
    return pre+cur;
  })
  return collection;
}

module.exports = calculate_elements_sum;

