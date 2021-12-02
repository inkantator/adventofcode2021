const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './day01input1.txt'), 'utf8');

const measurements = input.split('\n')
    .map(Number);

function window(array, size) {
    return array.map((_, i, ary) =>
        ary.slice(i, i + size)
    ).slice(0, -size + 1);
}

const windowArray= window(measurements,3);

const sumArray = windowArray.map(function (element) {
    return element.reduce((a, b) => a + b, 0)
}
);


let value = 0;

for (let i = 0; i<=sumArray.length-1; i++) {
    if (sumArray[i + 1] > sumArray[i]) {
        value++;
      
    }
}

  console.log(value);











