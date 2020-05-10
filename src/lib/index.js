"use strict";

module.exports.timeout = function(event){
    let timeout = event.payload.timeout;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let msg = {};
            msg.payload = {}
            msg.payload.date = new Date();
            msg.payload.timeout = timeout;
            resolve(msg);
        }, timeout);
    });
}

module.exports.sum = async function(event){
    return {payload: event.payload.x + event.payload.y};
}

module.exports.sumsync = function(event){
    return {payload: event.payload.x + event.payload.y};
}

module.exports.multiply = async function(event){
    return {payload: event.payload.x * event.payload.y};
}

module.exports.multiplysync = function(event){
    return {payload: event.payload.x * event.payload.y};
}

module.exports.null = function(event){
    return null;
}

module.exports.errorasync = async function(event){
    throw new Error("errorasync");
}