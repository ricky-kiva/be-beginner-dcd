// install package from npm: `npm install ${package}`
const _ = require('lodash')

// make partition from array
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2)
console.log(myOddEvenArray)