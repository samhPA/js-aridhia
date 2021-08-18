const http = require('./httpService');
const config = require('./config.js');

class Meta {
	constructor(res) {
		this.res = res;
	}

	getFields() {
        return this.res.dictionaries[0].fields;
    }

    getName() {
        return this.res.name;
    }

    getDescription() {
        return this.res.catalogue.description;
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

module.exports = Aridhia;
