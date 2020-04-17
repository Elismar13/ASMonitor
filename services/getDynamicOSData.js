const si = require('systeminformation');
const bytesToMegabytes = require('../src/utils/convertBytesToMega');

async function getDynamicOSData() {
    const { total, free, used, } = await si.mem();
    const { avgload, cpus } = await si.currentLoad();
    const { all, running, blocked, sleeping, list } = await si.processes();

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
    }
}

module.exports = getDynamicOSData;