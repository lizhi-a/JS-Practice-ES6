'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  collection_c = collection_a.filter(function(num){
    return collection_b.includes(num);
  })
  return collection_c;
}

module.exports = choose_common_elements;
