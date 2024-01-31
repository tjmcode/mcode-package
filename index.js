// MicroCODE: define this module's name for our 'mcode-log' package
const moduleName = 'index.js';

// gather all installed mcode-<package> modules into one object
const mcode = {};

// Load: M C O D E - L O G
try
{
    const mcodeLog = require('mcode-log');

    mcode.ready = mcodeLog.ready;

    mcode.vt = mcodeLog.vt;

    mcode.log = mcodeLog.log;
    mcode.info = mcodeLog.info;
    mcode.warn = mcodeLog.warn;
    mcode.error = mcodeLog.error;
    mcode.done = mcodeLog.error;
    mcode.debug = mcodeLog.debug;

    mcode.exp = mcodeLog.exp;
    mcode.fnc = mcodeLog.fnc;

    mcode.logify = mcodeLog.logify;
    mcode.logifyObject = mcodeLog.logifyObject;

    mcode.simplifyObject = mcodeLog.simplifyObject;

    mcode.ListfyArray = mcodeLog.ListfyArray;

    mcode.extractId = mcodeLog.extractId;

    mcode.isString = mcodeLog.isString;
    mcode.isObject = mcodeLog.isObject;
    mcode.isNumber = mcodeLog.isNumber;
    mcode.isJson = mcodeLog.isJson;
    mcode.isDate = mcodeLog.isDate;
    mcode.isTimeStamp = mcodeLog.isTimeStamp;

    mcode.timeStamp = mcodeLog.timeStamp;
}
catch (exp)
{
    // mcode-log is not installed
}

// Load: M C O D E - L I S T
try
{
    const mcodeList = require('mcode-list');

    mcode.swap = mcodeList.swap
    mcode.call = mcodeList.call;
}
catch (exp)
{
    // mcode-list is not installed
}


module.exports = mcode;
