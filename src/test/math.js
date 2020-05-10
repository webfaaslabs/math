"use strict";

const assert = require("assert");
const moduleTest = require("../lib");

assert.strictEqual(moduleTest.sumsync({payload:{x:2,y:3}}).payload, 5);
assert.strictEqual(moduleTest.sumsync({payload:{x:2,y:8}}).payload, 10);

console.log("2 + 3 = ", moduleTest.sumsync({payload:{x:2,y:3}}));

console.log("timeout...");
moduleTest.timeout({payload:{timeout:1000}}).then((response)=>{
    console.log("timeout ok", response);
});