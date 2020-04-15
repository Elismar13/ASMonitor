const SystemData = require('./getOsData');
const si = require('systeminformation');

async function getData() {
    const system = new SystemData();
    const systemData = await system.getSystemData();

    console.log(systemData)
}

getData()