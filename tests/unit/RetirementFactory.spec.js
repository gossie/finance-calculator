import RetirementFactory from "../../src/services/RetirementFactory";

describe('RetirementFactory.js', () => {
    it('should create retirement year', () => {
        const retirementFactory = new RetirementFactory(36000, 30000, 12000, 0.01, 5);

        expect(retirementFactory.createRetirementYear(4)).toEqual({
            
        });
    });
});