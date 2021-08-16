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
						console.log(meta.metaData)
				});
```

