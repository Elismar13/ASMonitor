const OverviewData = require('../services/getOsData');
const dynamicData = require('../services/getDynamicOSData');

class ApplicationData {
    constructor(){

    }

    async getOverViewData() {
        const Overview = await OverviewData();
        return Overview;
    }

    async getDynamicData() {
        const Data = await dynamicData();
        return Data;
    }
}

module.exports = ApplicationData;