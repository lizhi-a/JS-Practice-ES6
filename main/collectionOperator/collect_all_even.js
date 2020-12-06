'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var array = [];
  for(let value of collection.values()){
    if(value%2==0){
      array.push(value);
    }
  }
  return array;
}

module.exports = collect_all_even;
