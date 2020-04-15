const OverviewData = require('../services/getOsData');

class getData {
    
  async getOverViewData() {
    const Overview = await OverviewData();
    return Overview;
  }
}

module.exports = getData;