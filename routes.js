const routes = [
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}`;
        }
    },
    {
        method: "GET",
        path: '/',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: "GET",
        path: '/about',
        handler: (request, h) => {
            return "About Page";
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: "GET",
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'guest' } = request.params;
            return `Hello, ${username}!`;
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'guest'} = request.params;
            const { lang } = request.query;
            if ( lang === 'id') {
                return `Hai, ${name}`;
            }
            return `Hello, ${name}!`;
        },
    },
    {
        method: 'GET',
        path: '/data',
        handler: ( request, h) => {
            return h.response({message: 'success'}).type('text/plain').header('Content-Type','application/json').code(201);
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan!';
        },
    },
];

module.exports = routes;