const routes = [{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Homepage'
    }
}, {
    method: '*',
    path: '/',
    handler: (request, h) => {
        return "Can't access the page with that method"
    }
}, {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return 'About page'
    }
}, {
    method: '*',
    path: '/about',
    handler: (request, h) => {
        return "Can't access the page with that method"
    }
}, {
    method: 'GET',
    path: '/hello/{name?}', // `?` states that the parameter is optional
    // optional parameter could only be obtained from the last path
    handler: (request, h) => {
        const { name = 'Human'} = request.params // get parameter from path
        return `Hello, ${name}`
    }
}, {
    method: "*",
    path: '/{any*}',
    handler: (request, h) => {
        return "Page is not found"
    }
}]

module.exports = routes