'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var collection_a = collection.flat(Infinity);
  var collection_b = [];
  for(let num of collection_a){
    if(!collection_b.includes(num)) collection_b.push(num);
  }
  return collection_b;
}

module.exports = double_to_one;
