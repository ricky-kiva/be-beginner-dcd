const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const { method } = request

    if (method === 'GET') {
        response.end('<h1>Hello boys!</h1>')
    }

    // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Rickyslash\"}"
    if (method === 'POST') {
        let body = []

        request.on('data', chunk => {
            body.push(chunk) // push portion of request data content to `body`
        })

        // called after `request.on('data', chunk => { .. }` finished receiving data
        request.on('end', () => {
            body = Buffer.concat(body).toString() // concatenate all chuncks in `body` to single Buffer object, then turn to string
            const { name } = JSON.parse(body)
            response.end(`<h1>Hello, ${name}!</h1>`)
        })
    }
}

const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})