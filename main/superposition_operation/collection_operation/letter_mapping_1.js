'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  collection = collection.filter((value)=>{
    return value%2 == 0;
  })
  collection = collection.map((value)=>{
    return String.fromCharCode(96 + value);
  })
  return collection;
}

module.exports = even_to_letter;
