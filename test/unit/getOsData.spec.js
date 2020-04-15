const SystemData = require('../../services/getOsData');

describe("OS class should return OS detailed data", () => {
    it("Should create a new instance of getData class", () => {
        const DataAboutSystem = new SystemData();
        
        console.log(DataAboutSystem.getCPUData())
    }),

    it("Should return the information about the system", () => {
        const DataAboutSystem = new SystemData();

        expect(DataAboutSystem.getSystemData()).toBeCalledWith(
            expect.objectContaining({
                platform: expect.any(),
            })
        )
    })
})