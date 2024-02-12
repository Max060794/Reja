// Train Task-B

// Shunday function tuzing, u 1ta string parametrga ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countNumber(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        
        if (!isNaN(parseInt(string[i]))) {
            count++;
            }
        }
    return count;
}

const result = countNumber("ad2a54y79wet0sfgb9");
console.log(result);


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
