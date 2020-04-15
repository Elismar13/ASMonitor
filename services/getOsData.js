const os = require('os');

class SystemData extends os {
    constructor() {
        this.operationalSystem = this.getSystemData();
        this.cpu = this.getCPUData();
    }

    getSystemData() {
        return {
            platform: super.platform(),
            release: super.release()
        }
    }

    getCPUData() {
        const cpu = os.cpus();
    }
}

module.exports = SystemData;