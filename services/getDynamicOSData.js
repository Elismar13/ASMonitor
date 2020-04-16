const si = require('systeminformation');

async function getDynamicOSData() {
    const { total, free, used, } = await si.mem();
    const { avgload, cpus } = await si.currentLoad();
    const { all, running, blocked, sleeping, list } = await si.processes();

    return {
        memory: {
            total, 
            free,
            used
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
            list,
        },
    }
}

module.exports = getDynamicOSData;