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
argv.env==='qa' ? runNewman(process.env.RUN_ENVIRONMENT_QA,"QA Environment") : runNewman(process.env.RUN_ENVIRONMENT_DEV,"DEV Environment");
//condition ? exprIfTrue : exprIfFalse

function runNewman (environment_op,string_op) {
    // call newman.run to pass `options` object and wait for callback
    //demo#3
    newman.run({
        collection: process.env.RUN_COLLECTION,
        environment:   environment_op,
        reporters: ["cli","htmlextra","junit"]
        
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