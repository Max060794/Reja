// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


function getReverse(inputStr) {
    return inputStr.split('').reverse().join('');
}
var inputString = "hello";
var result = getReverse(inputString);
console.log(result);




// /*D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, 
// hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
// */

// function checkContent(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// const result = checkContent("mitgroup", "gmtiprou");
// console.log(result); 





// //Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// //MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//     constructor(non, cola, lagmon) {
//     this.non = non;
//     this.cola = cola;
//     this.lagmon = lagmon;
//     }

//     qabul(type, num) {
//     if (type === "non") {
//         this.non = this.non + num;
//     } else if (type === "cola") {
//         this.cola = this.cola + num;
//     } else {
//         this.lagmon = this.lagmon + num;
//     }
//     }
//     sotish(type, num) {
//     if (type === "non") {
//         this.non = this.non - num;
//     } else if (type === "cola") {
//         this.cola = this.cola - num;
//     } else {
//         this.lagmon = this.lagmon - num;
//     }
//     }
//     qoldiq() {
//     return `hozir ${new Date().getHours()} : ${new Date().getMinutes()} da ${
//         this.non
//     } ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`;
//     }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop);


// // Train Task-B

// // Shunday function tuzing, u 1ta string parametrga ega bolsin, 
// // hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

// // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countNumber(string) {
//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
        
//         if (!isNaN(parseInt(string[i]))) {
//             count++;
//             }
//         }
//     return count;
// }

// const result = countNumber("ad2a54y79wet0sfgb9");
// console.log(result);


// Train Task-A

// Shunday 2 parametrli function tuzing, 
// hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
// sozdan qatnashga sonini return qilishi kerak boladi.

// function countLetter(letter, word) {
//     let count = 0;
//     for(let i=0; i<word.length; i++) {
//     if(letter === word[i]) {
//         count++
//     }
//     }
//     return count
// }
// const result = countLetter("e", "engineer")
// console.log(result)
