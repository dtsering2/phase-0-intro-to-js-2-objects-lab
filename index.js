// Write your solution in this file!
const employee = {name: "NoName", streetAddress:"NoAddress"};
//Nondestructive
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]:value,
    };
}
//Destructive
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj;
}

//Nondestructive delete
function deleteFromEmployeeByKey(obj,key){
    const newobj={...obj};
    delete newobj[key];
    return newobj;
}

//destructive delete
function destructivelyDeleteFromEmployeeByKey(obj,key){
  
    delete obj[key];
    return obj;
}