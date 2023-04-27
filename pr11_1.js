const leftover=require("./pr11_1_module");
let paycheck=2500;
let bills=2499;
let bankBalance=leftover.getBalance(paycheck,bills);
console.log('My bank account has $${bankBalance}left!');