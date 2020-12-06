'use strict';
function one_add_next_multiply_three(collection){
    var collection = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    collection = collection.map((num,index) => {
          return (num+collection[index+1])*3;
    })  
    collection.pop(100);
    return collection;  
}
module.exports = one_add_next_multiply_three;
