// My Solution

function decodeMorse(morseCode){
    let words = morseCode.trim().split('   ').map(x=> x.split(' '))
    let result = [];
    words.forEach(word=>result.push(word.map(x=>MORSE_CODE[x]).join('')))
    return result.join(' ')
}


