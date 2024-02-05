// Module package: FILE


// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija:", natija);
// console.log("******************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija:", natija2);
// console.log("******************");

// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija:", natija3);


const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("===================");

const myAccount = new Account("Max", 100000, 88455125114525);
myAccount.giveMeDetails();

myAccount.makeDeposit(500000);

myAccount.withdrawMoney(400000);

myAccount.makeDeposit(800000);