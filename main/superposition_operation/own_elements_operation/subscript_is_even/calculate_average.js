'use strict';
var calculate_average = function(collection){
    collection = collection.filter((n) => {
        return n%2 == 0;
    })
    var length = collection.length;
    collection = collection.reduce((prev,cur) => {
        return prev+cur;
    })
    return collection/length;
};
module.exports = calculate_average;
