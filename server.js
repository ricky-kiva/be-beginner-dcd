const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const { method, url } = request

    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>This is homepage</h1>')
        } else {
            response.end(`<h1>Can't access this page using ${method} request</h1>`)
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end('<h1>This is About page</h1>')
        } else if (method === 'POST') { // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Rickyslash\"}"
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
        }  else {
            response.end(`<h1>Can't access this page using ${method} request</h1>`)
        }
    } else {
        response.end('<h1>Wait, I cannot find the page! What to do?</h1>')
    }
}

const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})