const cors = require('cors');

const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific methods
    preflightContinue: false,
};

module.exports = cors(corsOptions);