### JS-Aridhia

This is a javascript wrapper for Aridhia DRE API ( https://fair.covid-19.aridhia.io/api/docs/#/ )

### Installation

``` npm i js-aridhia ```

### How to use

First make sure to store your Aridhia beared token under env variable with the following name ```ARIDHIA_TOKEN```.

```javascript
// import js-aridhis to your project
const Aridhia = require('js-aridhia');

// set-up an Aridhia client
const aridhia = new Aridhia

// get the metadata of dataset "cord_19"
const meta = aridhia.getMeta("cord_19")
		.then(meta => {
			if (!meta)
				console.log("Oh no, it's NULL");
			else
				// Do things with the meta object
				const fields = meta.getFields(); //returns an array of the fields metadata
				const name =  meta.getName();
				const description = meta.getDescriptiom();
		});
```

### To Do

1. Add error message for error code 401: "Have set evn variable ARIDHIA_TOKEN to be your Aridhia bearer token?"
2. Add getAll to ```class Aridhia```
3. Add an axios interceptors on httpService