'use strict';
var even_group_calculate_average = function(collection){
    var array = []
    collection = collection.filter((value,index) => {
        return (index%2 == 1)&&(value%2 == 0);
    })
    if(collection.length == 0)  array.push(0);
    else{
        var collection_1=[],collection_2=[],collection_3=[];
        collection.forEach((n) => {
            if(n<10)   collection_1.push(n);
            else if(n<100)  collection_2.push(n);
            else collection_3.push(n);    
        })

        var length_1 = collection_1.length,
        length_2 = collection_2.length,
        length_3 = collection_3.length;
        if(length_1!=0){
            collection_1 = collection_1.reduce((pre,cur) => {
                return pre+cur;
            })
        }
        if(length_2!=0){
            collection_2 = collection_2.reduce((pre,cur) => {
                return pre+cur;
            })
        }
        if(length_3!=0){
            collection_3 = collection_3.reduce((pre,cur) => {
                return pre+cur;
            })
        }

        if(length_1!=0){
            array.push(collection_1/length_1);
        }
        if(length_2!=0){
            array.push(collection_2/length_2);
        }
        if(length_3!=0){
            array.push(collection_3/length_3);
        }
    }
    return array;
};
module.exports = even_group_calculate_average;
