const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'] // apply CORS on all path (add in each path on 'options' if want it to be specific)
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log(`Server runs on ${server.info.uri}`)
}

init()