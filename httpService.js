const axios = require('axios');
const config = require('./config.js');

this.token = config.token;
const http = this.authAxios = axios.create({
			headers: {
				Authorization: `Bearer ${this.token}`
			},
			timeout: 10000
		});

module.exports = http;
