function isFirstLetterUpperCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}

isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
let txt = "Nguyen van Nam";
let new_txt = txt.toUpperCase();
let new_txt1 = txt.toLowerCase();
console.log(new_txt);
console.log(new_txt1);