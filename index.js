// Write your solution in this file!


let driver = {Name: 'Sam'};

const updateDriverWithKeyAndValue = function(obj, key, value){
    return Object.assign({}, obj, { [key]: value });
}

const destructivelyUpdateDriverWithKeyAndValue = function(obj, key, value){
    return Object.assign(obj, {[key]:value})
}

const deleteFromDriverByKey = function(obj, key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromDriverByKey = function(obj, key){
 delete obj[key];
 return obj;
}
