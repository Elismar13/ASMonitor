const OverviewData = require('../services/getOsData');

class ApplicationData {
    constructor(){

    }

    async getOverViewData() {
        const Overview = await OverviewData();
        return Overview;
    }
}

module.exports = ApplicationData;