'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  collection_c = collection_b.filter(function(num){
    return collection_a.includes(num) === true
  })
  return collection_c;
}

module.exports = get_intersection;
