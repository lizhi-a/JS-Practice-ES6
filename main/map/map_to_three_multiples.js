'use strict';
var map_to_three_multiples = function(collection){
    var array = [];
  array = collection.map((x)=>x*3);
  return array;
};

module.exports = map_to_three_multiples;
