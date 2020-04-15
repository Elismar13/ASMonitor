const si = require('systeminformation');

async function getData() {
    const motherboard = await si.baseboard();
    const memory = await si.mem();
    const graphics = await si.graphics();
    const storage = await si.diskLayout();
    const operationalSystem = await si.osInfo();
    const networks = await si.networkInterfaces();

    console.log(networks)
}

getData()