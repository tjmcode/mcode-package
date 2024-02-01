// MicroCODE: define this module's name for our 'mcode-log' package
const moduleName = 'mcode-package.js';
const packageJson = require('./package.json');
const log = require('mcode-log');

// gather all installed mcode-<package> modules into one object
const mcode = {};

// Load: M C O D E - L O G
try
{
    const mcodeLog = require('mcode-log');

    // assign all mcode-log methods to mcode
    Object.assign(mcode, mcodeLog);

    log.debug(mcode, moduleName);
    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-log'`, moduleName);
}
catch (exp)
{
    // mcode-log is not installed - OPTIONAL
}

// Load: M C O D E - L I S T
try
{
    const mcodeList = require('mcode-list');

    // assign all mcode-list methods to mcode
    Object.assign(mcode, mcodeList);

    log.debug(mcode, moduleName);
    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-list'`, moduleName);
}
catch (exp)
{
    // mcode-list is not installed - OPTIONAL
}

module.exports = mcode;
