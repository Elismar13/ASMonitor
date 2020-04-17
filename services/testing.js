const data = require('./getDynamicOSData')
const bytesToMega = require('../src/utils/convertBytesToMega')

const interval = 1000

setInterval(() => {
    data().then(data => {
        console.log(data.memory)
        console.log(bytesToMega(data.memory.used)-1000)
    })
}, interval);