'use strict';
var is_exist_element = function(collection,element){
    collection = collection.filter((value,index) => {
        return (index%2 == 0);
    })
    return collection.includes(element);
};
module.exports = is_exist_element;
