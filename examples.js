// MicroCODE: define this module's name for  our 'mcode-package' package
const MODULE_NAME = 'examples.js';
const mcode = require('./index.js');

// Make the MicroCODE functions available globally, from a single read-only object
global.mcode = mcode;

async function showExample()
{
    // wait for the cache to be ready...
    const maxRetries = 30;
    let retries = 0;

    while (!mcode.redisReady && retries < maxRetries)
    {
        mcode.log('Waiting for cache to be ready...', MODULE_NAME);
        await new Promise(resolve => setTimeout(resolve, 1000));
        retries++;
    }

    if (!mcode.redisReady)
    {
        throw new Error('Cache not ready after waiting for 30 seconds.');
    }
    else
    {
        mcode.log('Cache is ready!', MODULE_NAME);
    }

    // show the 'bundled' mcode namespace...
    mcode.info({mcode: mcode}, MODULE_NAME);

    // Demo logging...
    mcode.done('Hello from the mcode-package module!', MODULE_NAME);
}

// run the tests
showExample();

// exit the process after the demo is done...
setTimeout(() =>
{
    process.exit(0);

}, 2000);