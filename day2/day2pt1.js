const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

const instructions = input.split('\n')

// console.log(instructions);

var horizontal = 0;
var depth = 0;

instructions.map(element => {
    var x = element.split(/(\s+)/).filter(function (e) {
        return (e.trim().length) > 0;
    });
    if (x[0] == 'forward') horizontal = horizontal + Number(x[1]);
    if (x[0] == 'up') depth = depth - Number(x[1]);
    if (x[0] == 'down') depth = depth + Number(x[1]);
});

console.log(horizontal);
console.log(depth);
console.log(horizontal * depth);


