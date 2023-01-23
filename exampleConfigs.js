newman.run({
  collection: require('./sample-collection.json'),
  iterationData: [{ "var": "data", "var_beta": "other_val" }],
  globals: {
      "id": "5bfde907-2a1e-8c5a-2246-4aff74b74236",
      "name": "test-env",
      "values": [
          {
              "key": "alpha",
              "value": "beta",
              "type": "text",
              "enabled": true
          }
      ],
      "timestamp": 1404119927461,
      "_postman_variable_scope": "globals",
      "_postman_exported_at": "2016-10-17T14:31:26.200Z",
      "_postman_exported_using": "Postman/4.8.0"
  },
  globalVar: [ 
      { "key":"glboalSecret", "value":"globalSecretValue" },
      { "key":"globalAnotherSecret", "value":`${process.env.GLOBAL_ANOTHER_SECRET}`}
  ],
  environment: {
      "id": "4454509f-00c3-fd32-d56c-ac1537f31415",
      "name": "test-env",
      "values": [
          {
              "key": "foo",
              "value": "bar",
              "type": "text",
              "enabled": true
          }
      ],
      "timestamp": 1404119927461,
      "_postman_variable_scope": "environment",
      "_postman_exported_at": "2016-10-17T14:26:34.940Z",
      "_postman_exported_using": "Postman/4.8.0"
  },
  envVar: [ 
      { "key":"secret", "value":"secretValue" },
      { "key":"anotherSecret", "value":`${process.env.ANOTHER_SECRET}`}
  ],
}).on('start', function (err, args) { // on start of run, log to console
  console.log('running a collection...');
}).on('done', function (err, summary) {
  if (err || summary.error) {
      console.error('collection run encountered an error.');
  }
  else {
      console.log('collection run completed.');
  }
});

/****PRIMER EJEMPLO *****/
const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./sample-collection.json'),
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});

//FUNCTION RUN NEWMAN
function runNewman (collection, collectionName, done) {
  responses = [];
  newman.run({
    collection: collection
  }).on('beforeItem', function (err, summary) {
    if (err) {
      return done(err);
    }
    console.log('Sending request: ' + summary.item.name);
  }).on('request', function (err, summary) {
    if (err) {
      return done(err);
    }

    var stdout = summary.response.stream.toString();
    try {
      stdout = JSON.parse(stdout);
    }
    catch (e) {
      console.error();
    }

    responses.push(stdout);
    console.log('Done: ' + summary.item.name);
  }).on('done', function (err) {
    if (err) {
      return done(err);
    }
    responseObject[collectionName] = responses;
    return done(null, '\nNewman run complete with no errors for collection ' + collectionName + '\n');
  });
}