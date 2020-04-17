const data = require('./getDynamicOSData')
const bytesToMega = require('../src/utils/convertBytesToMega')
const convertToPercentage = require('../src/utils/convertToPercentage')

const interval = 1000

setInterval(() => {
    data().then(data => {
        console.log(data.process)
        console.log(convertToPercentage(data.process.running, data.process.all))
    });

    
}, interval);