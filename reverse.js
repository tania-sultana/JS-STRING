/*
//charecter reverse
function reverseString(text){
    let reverse = ';'
    for(let i = text.length - 1; i >= 0; i--){
        const element = text[i];
        reverse = reverse + element;
        console.log(element, reverse);
    }
    return reverse;
}
const myString = 'I am good girl';
const reverse = reverseString(myString)
console.log('reverse output:', reverse);*/


function reverseWords(str){
    const word = str.split(' ');
    const result = [];
    for(let i = word.length - 1; i >= 0; i--){
        const element = word[i];
        result.push(element);
        
    }
    const reverse = result.join(' ');
    return reverse;
}
const myString = 'I am good girl';
reverseWords(myString);