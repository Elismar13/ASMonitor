const si = require('systeminformation');

async function getData() {
    const motherboard = await si.baseboard();
    const memory = await si.mem();
    const graphics = await si.graphics();
    const storage = await si.diskLayout();
    const operationalSystem = await si.osInfo();

    console.log(operationalSystem)
}

getData()