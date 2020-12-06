'use strict';
var calculate_median = function(collection){
    collection = collection.filter((value,index) => {
        return index%2 == 1;
    })
    var length = collection.length;
    if(length%2 == 0)
        return(collection[length/2]+collection[length/2-1])/2;
    else
        return (collection[parseInt(length/2)]);
};
module.exports = calculate_median;
