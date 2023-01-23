//newman library
const newman = require('newman'); // require newman in your project


//yargs library. Helps use arguments inside the node commnad. example: ./config.js --ships=4 --distance=22
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

//dotenv library
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

//environment setup, QA or DEV, but same collectionid
if (argv.environment==1) {
    console.log('QA ENV Collection Selected');
     runNewman(process.env.RUN_ENVIRONMENT_QA,"QA Environment");
}else{
    console.log('DEV ENV Collection Selected');
    runNewman(process.env.RUN_ENVIRONMENT_DEV,"DEV Environment");
}


function runNewman (environment_op,string_op) {
    // call newman.run to pass `options` object and wait for callback
    newman.run({

        collection:  process.env.RUN_COLLECTION,
        environment:   environment_op,
        reporters: ["cli","junit"]
    
    }).on('start', function (err, args) { // on start of run, log to console
        console.log('running tests on... '+string_op);
      }).on('done', function (err, summary) {
        if (err || summary.error) {
            console.error('collection run encountered an error.');
        }
        else {
            console.log('collection run completed on.. ' +string_op);
        }
    });

}