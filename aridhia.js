const http = require('./httpService');
const config = require('./config.js');

const getMockResponse = require('./fakeData');

class Meta {
	constructor(obj) {
		this.metaData = obj.dictionaries[0];
	}
}

class Aridhia {

	constructor() {
		this.endpoint = config.endpoint;
		this.token = config.token;	
	}

	getMeta = async (datasetCode) => {
		try {
			const res = await http.get(this.endpoint + datasetCode);
			const meta = new Meta(res.data);
			return meta;

		} catch (err) {
			// throw err; // <---- Throwing exceptions is not allowed here
			console.log("####################### error: " + err + " " + "##########################");
			return null;
		}
	}

}
