const os = require('os');

class SystemData extends os {
    constructor() {
        this.operationalSystem = this.setSystemData();
        this.cpu = this.setCPUData();
    }

    setSystemData() {
        this.operationalSystem = {
            platform: super.platform(),
            release: super.release()
        }
    }

    setCPUData() {
        this.cpu = {
            cpus: os.cpus(),
        }
    }

    getSystemData() {
        return this.operationalSystem;
    }

    getCPUData() {
        return this.cpu;
    }
}

module.exports = SystemData;