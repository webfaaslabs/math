"use strict";

module.exports.sum = function(event){
    return {payload: event.payload.x + event.payload.y};
}

module.exports.multiply = function(event){
    return {payload: event.payload.x * event.payload.y};
}

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