/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//My Solution:


function toCamelCase(str){
    let arr = str.replaceAll('-',' ').replaceAll('_',' ').split(' ')
        return arr[0].concat(...arr.slice(1,arr.length)
                .map(x=> x[0].toUpperCase()+x.slice(1,x.length)))
}


    




