'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
  array = collection_a.filter((n) => {
    return array.includes(n) == false;
  });
  console.log(array);
  collection_b.forEach((n) => {
    if( array.includes(n) == false){
      array.push(n);
    }
  });
  return array;
}

module.exports = get_union;

