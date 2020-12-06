'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  collection_c = collection_a.filter(function(num){
    return collection_b.includes(num);
  })

  var collection_d = [];
  collection_d = [...collection_a,...collection_b];

  var array = [];
  array = collection_d.filter(function(num){
    return !collection_c.includes(num);
  })
  return array;
}

module.exports = choose_no_common_elements;
