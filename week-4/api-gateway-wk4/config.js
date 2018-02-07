var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.apiKey = {'secret': 'topsecret'};


module.exports = config;