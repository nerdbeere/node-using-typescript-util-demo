const MathUtil = require('typescript-rollup-util');
const math = new MathUtil();

const result = math.sum(1, 1, 2, 3, 5, 8, 13, 21);

console.log(result);
