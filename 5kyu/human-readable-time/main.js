/*
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/


function humanReadable (seconds) {
    let time = [ Math.trunc(seconds/3600) , Math.trunc((seconds%3600)/60), seconds%60 ]
    .map(x=> String((x)))
    .map(n => n.length != 2 ? n.padStart(2,'0') : n )
    
    return `${time[0]}:${time[1]}:${time[2]}`
}

function humanReadable (seconds) {
    let time = [ seconds/3600 , (seconds%3600)/60, seconds%60 ]
    .map(x=> String(Math.trunc(x)))
    .map(n => n.length != 2 ? n.padStart(2,'0') : n )
    
    return `${time[0]}:${time[1]}:${time[2]}`
}



