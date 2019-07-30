export default class RetirementFactory {

    constructor(yearlyExpenses, saveFortune, riskFortune, interestFactorSave, interestFactorRisk) {
        this.yearlyExpenses = yearlyExpenses;
        this.saveFortune = saveFortune;
        this.riskFortune = riskFortune;
        this.interestFactorSave = interestFactorSave;
        this.interestFactorRisk = interestFactorRisk;
    }

    createRetirementYear(year) {
        const half = this.yearlyExpenses / 2;

        const saveFactor = this.saveFortune / (this.saveFortune + this.riskFortune);
        const riskFactor = 1 - saveFactor;

        if (this.saveFortune >= half && this.riskFortune >= half) {
            this.saveFortune = Math.max(0, this.saveFortune - (this.yearlyExpenses * saveFactor));
            this.riskFortune = Math.max(0, this.riskFortune - (this.yearlyExpenses * riskFactor));
        } else if (this.saveFortune < half) {
            this.riskFortune = Math.max(0, this.riskFortune - this.yearlyExpenses);
        } else {
            this.saveFortune = Math.max(0, this.saveFortune - this.yearlyExpenses);
        }

        const interestSave = this.saveFortune * this.interestFactorSave;
        const interestRisk = this.riskFortune * this.interestFactorRisk;

        this.saveFortune += interestSave;
        this.riskFortune += interestRisk;

        return {
            number: year,
            interests: interestSave + interestRisk,
            saveFortune: this.saveFortune,
            riskFortune: this.riskFortune,
            fortune: this.saveFortune + this.riskFortune + interestSave + interestRisk
        };
    }
}
