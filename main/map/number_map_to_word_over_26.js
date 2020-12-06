'use strict';
var number_map_to_word_over_26 = function(collection){
    collection = collection.map(function(num){
        if(num<=26)
            return String.fromCharCode(96+parseInt(num));
        else return ('a'+String.fromCharCode(96+parseInt(num-26)));
    });
    return collection;
};

module.exports = number_map_to_word_over_26;
