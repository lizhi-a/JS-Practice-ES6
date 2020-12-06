'use strict';

function compute_average(collection) {
  //在这里写入代码
  var length = collection.length;
  collection = collection.reduce(function(pre,cur){
    return pre+cur;
  })
 return collection/length;
}

module.exports = compute_average;

