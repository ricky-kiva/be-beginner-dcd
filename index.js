// REPL: Read-Eval-Print-Loop, a way to execute 1 line of JS code using Node.js
// - access Node.js "REPL" by writing `node` in the console
// - do multiline REPL by writing `.editor`

// execute this file using `node ${filename}` (node index.js)
const message = (name) => console.log(`Good day ${name} !`)
message('Rickyslash')

// `process` in Node.js: a global object that has function & properties containing informations about the process that is being run
// `process.env`: property to save or get some value regarding the running environment
/* Set new conditional `process.env` called "NODE_ENV"
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'rickyslash.my.id'
})
*/

// we could also to give value in `process.env` property 'when executing JavaScript file'
// - SET NODE_ENV=production && node app.js

// get information about memory usage using `process`:
const memoryInformation = process.memoryUsage()
console.log(memoryInformation)

// `process.argv`: allow a `process` to contain array of arguments when executed
// - execute using `argv`: node index.js "Harry" "Potter"
const firstName = process.argv[2]
const secondName = process.argv[3]
if (firstName !== undefined && secondName !== undefined) {
    console.log(`Hello, ${process.argv[2]} ${process.argv[3]}`)
}