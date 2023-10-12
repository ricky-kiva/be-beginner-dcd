const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = (process.argv[2] == undefined) ? "Rickyslash" : process.argv[2]
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) { 
    // perform looping to increase memory usage
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hi, ${yourName}`)
console.log(`Environment mode: ${environment}`)
console.log(`Memory usage is raising from ${initialMemoryUsage} to ${currentMemoryUsage}`)