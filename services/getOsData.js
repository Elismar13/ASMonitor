const si = require('systeminformation');

class SystemData {
    constructor() {
        this.state = {};
    }
    
    async getSystemData() {
        const system = await si.system();
        const cpu = await si.cpu();

        return {
            system,
            cpu,
        }
    }

    async getProcess() {
        return await si.processes();
    }

    async getGraphics() {
        return await si.graphics();
    }
} 

module.exports = SystemData;