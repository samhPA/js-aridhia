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


console.log("start...");
console.log("1...");
console.log("2...");
console.log("3...");
const aridhia = new Aridhia("stub");
const meta = aridhia.getMeta("cord_19")
				.then(meta => {
					if (!meta)
						console.log("Oh no, it's NULL");
					else
						console.log(meta.metaData)
				});




// // res = client.getDataSet("stub");
// res = getMockResponse();
// metaData = new MetaData(res);

// // metaData.fields.map(field =>{
// // 	console.log(field);
// // }); 
// console.log('MetaData object...');
// console.log(metaData.fields[0]);


// console.log('Meta object...');
// const meta = new Meta(res);
// console.log(meta.data.fields[0]);


