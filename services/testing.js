const data = require('./getDynamicOSData')

const interval = 1000

setInterval(() => {
    data().then(data => console.log(data))
}, interval);