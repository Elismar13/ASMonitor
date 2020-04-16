const si = require('systeminformation');

async function getData() {
    const { manufacturer, model } = await si.baseboard();
    const { total } = await si.mem();
    const { controllers } = await si.graphics();
    const storage = await si.diskLayout();
    const { platform, distro, kernel, arch } = await si.osInfo();
    const networks = await si.networkInterfaces();

    return {
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