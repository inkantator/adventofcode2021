const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

const num = input.split('\n').filter((x) => Boolean(x));

lines = num.map(e => {
    return [...e];
});

const len = lines[0].length;

function getCount(lines) {
    const zeroFreq = Array(len).fill(0);
    const oneFreq = Array(len).fill(0);
    
    for (const line of lines) {
        const bits = [...line];
        
        bits.forEach((bit, index) => {
            if (bit === "0") { zeroFreq[index]++ }
            else { oneFreq[index]++ }
        }); 
    }
    
    return { zeroFreq, oneFreq };
}

function getOxygenRating(lines, index = 0) {
    const { zeroFreq, oneFreq } = getCount(lines);
   
    let mostCommonBit = '1';
    if (zeroFreq[index] > oneFreq[index]) {
        mostCommonBit = '0';
    }
    const filtered = lines.filter((line) => line[index] === mostCommonBit)
    if (filtered.length === 1) return filtered[0];
    return getOxygenRating(filtered, index + 1);
}

function getCO2Rating(lines, index = 0) {
    const { zeroFreq, oneFreq } = getCount(lines);
  
    let leastCommonBit = '0';
    if (zeroFreq[index] > oneFreq[index]) {
        leastCommonBit = '1';
    }
    const filtered = lines.filter((line) => line[index] === leastCommonBit)
    if (filtered.length === 1) return filtered[0];
    return getCO2Rating(filtered, index + 1);
}


    oxygenRating = getOxygenRating(lines).join('');
    CO2Rating = getCO2Rating(lines).join('');

    console.log(parseInt(oxygenRating,2)* parseInt(CO2Rating,2));



