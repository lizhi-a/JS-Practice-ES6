'use strict';
var number_map_to_word = function(collection){
  collection = collection.map(function(num){
      return String.fromCharCode(96+parseInt(num));
  });
  return collection;
};

module.exports = number_map_to_word;
