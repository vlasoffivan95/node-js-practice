// const fs = require("fs/promises");
// const addtext = 'Test with nodeJS';

// fs.readFile("./text.txt", "utf-8").then(
//   fs.appendFile("./text.txt", `\n ${addtext}`)
// );

const _ = require('lodash')

const number = _.random(0, 1)
console.log(number)