const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

const num = input.split('\n')

matrix = num.map(e => {
    return e.split('')
});

const rowLength = matrix[0].length;
let oneFreq = 0;
let zeroFreq = 0
var frequencyTable = [];

for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] == 1) oneFreq++;
        if (matrix[j][i] == 0) zeroFreq++;
    }
    console.log(zeroFreq);
    console.log(oneFreq);
   
    (oneFreq > zeroFreq) ? frequencyTable.push('1') : frequencyTable.push('0');
    oneFreq = 0;
    zeroFreq = 0;
    
}

console.log(frequencyTable);
epsilonTable = frequencyTable.map(e => e == '1' ? 0 : 1);

const gammaBinary = frequencyTable.join('');

const epsilonBinary = epsilonTable.join('');
console.log(epsilonBinary)
const gamma = parseInt(gammaBinary, 2);
const epsilon = parseInt(epsilonBinary, 2);
console.log(gamma);
console.log(epsilon);
console.log(gamma * epsilon);
;