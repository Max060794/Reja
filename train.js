// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, 
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.

// MASALAN: getReverse("hello") return true return qiladi

function findDoublers(str) {
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) {
        return true;
    }
    }
    return false;
}
    console.log(findDoublers("hello"));

