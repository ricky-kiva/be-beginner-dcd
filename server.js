const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.setHeader('X-Powered-By', 'NodeJS')

    const { method, url } = request

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'This is Homepage'
            }))
        } else {
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `Can't access this page using ${method} request`
            }))
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'This is About page'
            }))
        } else if (method === 'POST') { // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Rickyslash\"}"
            let body = []

            request.on('data', chunk => {
                body.push(chunk) // push portion of request data content to `body`
            })

            // called after `request.on('data', chunk => { .. }` finished receiving data
            request.on('end', () => {
                body = Buffer.concat(body).toString() // concatenate all chuncks in `body` to single Buffer object, then turn to string
                const { name } = JSON.parse(body)

                response.statusCode = 200
                response.end(JSON.stringify({
                    message: `Hello, ${name}!`
                }))
            })
        }  else {
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `Can't access this page using ${method} request`
            }))
        }
    } else {
        response.statusCode = 400
        response.end(JSON.stringify({
            message: "Wait, I cannot find the page! What to do?"
        }))
    }
}

const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})