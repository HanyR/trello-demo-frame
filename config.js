const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./src/collections/Dev/dev-tests.postman_collection.json'),
    environment: require('./src/collections/Dev/dev-env.postman_environment.json'),
    reporters: 'junit'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});