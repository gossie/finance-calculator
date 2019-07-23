export default class RetirementFactory {

    constructor(yearlyExpenses, saveFortune, riskFortune, factorSave, factorRisk) {
        this.yearlyExpenses = yearlyExpenses;
        this.saveFortune = saveFortune;
        this.riskFortune = riskFortune;
        this.factorSave = factorSave;
        this.factorRisk = factorRisk;
    }

    createRetirementYear(year) {
        const half = this.yearlyExpenses / 2;

        if (this.saveFortune >= half && this.riskFortune >= half) {
            this.saveFortune = Math.max(0, this.saveFortune - (this.yearlyExpenses / 2));
            this.riskFortune = Math.max(0, this.riskFortune - (this.yearlyExpenses / 2));
        } else if (this.saveFortune < half) {
            this.riskFortune = Math.max(0, this.riskFortune - this.yearlyExpenses);
        } else {
            this.saveFortune = Math.max(0, this.saveFortune - this.yearlyExpenses);
        }

        const interestSave = this.saveFortune * this.factorSave;
        const interestRisk = this.riskFortune * this.factorRisk;

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
