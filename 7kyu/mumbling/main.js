/*
DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

//My solution

function accum(s) {
	return s.split('').map( (x,i)=> {
    let u = x.toUpperCase()
    let l = x.toLowerCase()
    return i>0 ? u + l.padStart(i,l) : u } ).join('-')
}