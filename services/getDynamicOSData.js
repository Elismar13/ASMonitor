const si = require('systeminformation');
const moment = require('moment');
const bytesToMegabytes = require('../src/utils/convertBytesToMega');

async function getDynamicOSData() {
    const { total, free, used, } = await si.mem();
    const { avgload, cpus } = await si.currentLoad();
    const { all, running, blocked, sleeping, list } = await si.processes();
    const time = `${moment().format('LTS')} ${si.time().timezone}` ;

    return {
        memory: {
            totalmem: bytesToMegabytes(total) , 
            freemem:free,
            usedmem: bytesToMegabytes(used)-1000,
        },
        cpu:{
            avgload,
            cpus,
        },
        process: {
            all,
            running,
            blocked,
            sleeping,
        },
        time
    }
}

module.exports = getDynamicOSData;