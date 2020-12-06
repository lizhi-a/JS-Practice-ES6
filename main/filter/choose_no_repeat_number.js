'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var array = [];
  for(let value of collection.values()){
    if(array.includes(value)==false)  array.push(value);
  }
  return array;
}

module.exports = choose_no_repeat_number;
