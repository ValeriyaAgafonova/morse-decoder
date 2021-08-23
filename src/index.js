const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
        let parts = [];
        let x;
        let n = 1;
       for (let i = 0; i < expr.length; i+= 10){
           if (expr[i] == '*'){
               x = ' ';
               parts.push(x);
               n++;
           }
           else{
              x = Number(expr.slice(i, 10 * n));
                parts.push(x);
                n++;
           }
       }
    // now we have array with numbers with no 0
    
    let mors = [];
    for (part of parts) {
        let hey = '';
        if (part == ' '){
            hey += ' ';
            mors.push(hey);
            continue;
        }
        let newLocal = String(part);
        let t = newLocal.length;
        for (let i = 0; i < newLocal.length; i += 2){
            if (newLocal[i] + newLocal[i + 1] == '10'){
                hey += '.';
            }
            if (newLocal[i] + newLocal[i + 1] == '11'){
                hey += '-';
            }
    
        }
        mors.push(hey);
    }
    // array with .-. .-- 
    
    let result = '';
    for (mor of mors){
        if (mor in MORSE_TABLE) {
    result += MORSE_TABLE[mor];
        }
        if (mor == ' '){
            result += ' ';
        }
    }
    return result;
    
       }
module.exports = {
    decode
}