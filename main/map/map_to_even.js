'use strict';
function map_to_even(collection){
  var array = [];
  array = collection.map((x)=>x*2);
  return array;
}
module.exports = map_to_even;
