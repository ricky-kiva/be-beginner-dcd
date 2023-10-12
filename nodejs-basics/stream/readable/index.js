const fs = require('fs')
const path = require('path')

const textPath = path.resolve(__dirname, 'paragraph.txt')

// will return `EventEmitter`
const readableStream = fs.createReadStream(textPath, {
    highWaterMark: 10 // set buffer
})

// handle `readable` event
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`) // read every 10 buffer (10 alphabets)
    } catch(error) {
        console.log(error)
    }
})

// handle `end` event
readableStream.on('end', () => {
    console.log(': Scorpions - Wind of Change')
})