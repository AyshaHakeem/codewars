/*
DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){  
    return str.split(' ').map(x => {
        return x.match(/^[A-Za-z]+$/) ? x.concat(`${x[0]}ay`).substr(1) : x
    }).join(' ')
}