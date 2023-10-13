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

        // to access: {root_path}/hello/{name}?lang=id
        const { lang } = request.query // get query from path

        if (lang === 'id') {
            return `Apa kabar, ${name}!`
        }
        
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