const data = require('./getDynamicOSData')
const bytesToMega = require('../src/utils/convertBytesToMega')
const convertToPercentage = require('../src/utils/convertToPercentage')

const si = require('systeminformation');

const interval = 1000

setInterval(() => {
    data().then(data => {
        console.log(si.time())
    });

    
}, interval);