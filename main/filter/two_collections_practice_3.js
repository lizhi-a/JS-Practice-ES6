'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for(let num1 of collection_a.values()){
    for(let num2 of collection_b.values()){
      if(num1%num2 == 0) collection_c.push(num1);
    }
  }
  return collection_c;
}

module.exports = choose_divisible_integer;
