'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var length = collection.length;
  collection = collection.reduce(function(prev,cur){
    return prev + cur;
  })
  return String.fromCharCode(96+Math.round(collection/length));
}

module.exports = average_to_letter;

