const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './day01input1.txt'), 'utf8');

const measurements = input.split('\n')
    .map(Number);
// console.log(measurements);
let value = 0;

for (i = 0; i < measurements.length; i++) {
    
  if (measurements[i+1] > measurements[i]) {
      value++;
    }
}

console.log(value);