### JS-Aridhia

This is a javascript wrapper for Aridhia DRE API ( https://fair.covid-19.aridhia.io/api/docs/#/ )

### Installation

``` npm install ```

### How to use

First make sure to store your Aridhia beared token under env variable with this name ```ARIDHIA_TOKEN```.

```javascript
// set-up an Aridhia client
const aridhia = new Aridhial

// get the metadata of dataset "cord_19"
const meta = aridhia.getMeta("cord_19")
				.then(meta => {
					if (!meta)
						console.log("Oh no, it's NULL");
					else
						console.log(meta.metaData)
				});
```

