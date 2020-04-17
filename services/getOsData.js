const si = require('systeminformation');
const os = require('os');

async function getData() {
    const username = os.hostname();
    const cpu = await si.cpu()
    const { manufacturer, model } = await si.baseboard();
    const { total } = await si.mem();
    const { controllers } = await si.graphics();
    const storage = await si.diskLayout();
    const { platform, distro, kernel, arch, } = await si.osInfo();
    const networks = await si.networkInterfaces();

    //console.log(controllers)
    return {
        username,
        cpu: cpu.manufacturer + cpu.brand,
        motherboard: manufacturer+model,
        memory: {
            total,
        },
        graphics: {
            controllers,
        },
        storage,
        os: {
            platform,
            distro,
            kernel,
            arch,
        },
        networks
    }
}

module.exports = getData;