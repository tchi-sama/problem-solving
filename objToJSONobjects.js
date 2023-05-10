/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    const convertObj=(obj)=>{
    if(typeof(obj)=="boolean"||typeof(obj)=="number"){
        return obj
    }
    else if(typeof(obj)=="string"){
        return `"${obj}"`
    }
    else if(typeof(obj)=="object"){


    if(Array.isArray(obj)){
    return "["+obj.map((ele,i)=>(
        `${typeof(ele)=="string"? (`"${ele}"`) 
        :(typeof(ele)=="object"&&ele!=null)?
        convertObj(ele):ele}`)).join(",")+"]"
    }else{
    if(obj==null){
        return obj
    }
    let keys = Object.keys(obj);
    return "{"+keys.map(key=>(
        `"${ key }":${ 
        typeof(obj[key])=="string"? (`"${obj[key]}"`) 
        :(typeof(obj[key])=="object"&&obj[key]!=null)?
        convertObj(obj[key]):obj[key]}`)).join(",")+"}"
    }
    }
    }
    return convertObj(object)
};