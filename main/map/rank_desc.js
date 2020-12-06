'use strict';
var rank_desc = function(collection){
    var compare = function(a,b){
        if(a>b) return 1;
        else if(a == b) return 0;
        else return -1;
    
      }
      return collection.sort(compare);
};

module.exports = rank_desc;
