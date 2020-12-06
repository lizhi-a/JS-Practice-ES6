'use strict';
var single_element = function(collection){
    collection = collection.filter((value,index) => {
        return (index%2 == 1);
    })
    var array = [];
    var flag = 0;
    collection.forEach((num1,index1)=>{
        var flag = 0;
        collection.forEach((num2,index2)=>{
            if(num1==num2&&index1!=index2){
                flag = 1;
            }
        });
        if(flag == 0) array.push(num1);
    });
    return  array ;
};
module.exports = single_element;
