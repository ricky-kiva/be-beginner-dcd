const fs = require('fs')
const path = require('path')

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("Failed to read file")
        return
    }
    console.log(data)
}

const pathNote = path.resolve(__dirname, 'notes.txt')
fs.readFile(pathNote, 'UTF-8', fileReadCallback)