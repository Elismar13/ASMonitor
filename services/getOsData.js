const os = require('os');
const si = require('systeminformation');

class SystemData {
    constructor() {
        this.system;
        this.cpu;
        this.process;

        this.getSystemData();
    }

    async getSystemData() {
        this.system = await si.system();
        this.cpu = await si.cpu();
        this.process = await si.processes();
    }
}

module.exports = SystemData;