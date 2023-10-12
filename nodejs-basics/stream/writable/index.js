const fs = require('fs')
const path = require('path')

const pathInput = path.resolve(__dirname, 'input.txt')
const pathOutput = path.resolve(__dirname, 'output.txt')

const readableStream = fs.createReadStream(pathInput, {
    highWaterMark: 15
})

const writableStream = fs.createWriteStream(pathOutput)

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch(error) {
        console.log(error)
    }
})

readableStream.on('end', () => {
    writableStream.end()
})