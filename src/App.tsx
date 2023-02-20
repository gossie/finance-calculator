import { useState } from 'react'
import FinanceInput from './components/FinanceInput'

function App() {
    const [initialFortuneSave, setInitialFortuneSave] = useState(0);
    const [initialFortuneRisk, setInitialFortuneRisk] = useState(0);
    const [yearlyFortuneSave, setYearlyFortuneSave] = useState(0);
    const [yearlyFortuneRisk, setYearlyFortuneRisk] = useState(0);
    const [interestSave, setInterestSave] = useState(0);
    const [interestRisk, setInterestRisk] = useState(0);
    const [years, setYears] = useState(0);
    const [retirementYears, setRetirementYears] = useState(0);
    const [costsPerYear, setCostsPerYear] = useState(0);

    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    })

    const yearlySavings: Array<JSX.Element> = [];
    let save = initialFortuneSave;
    let risk = initialFortuneRisk;
    for (let i=0; i<years; i++) {
        save *= (1 + interestSave / 100)
        save += yearlyFortuneSave;

        risk *= (1 + interestRisk / 100);
        risk += yearlyFortuneRisk;

        yearlySavings.push(<tr key={i}><td>Year {i + 1}</td><td>{formatter.format(Math.round(save * 100) / 100)}</td><td>{formatter.format(Math.round(risk * 100) / 100)}</td><td>{formatter.format(Math.round((save + risk) * 100) / 100)}</td></tr>);
    }

    const yearlySpendings: Array<JSX.Element> = [];
    for (let i=0; i<retirementYears; i++) {
        const saveFactor = save / (save + risk);
        
        save -= saveFactor * costsPerYear;
        risk -= (1 - saveFactor) * costsPerYear;

        save *= (1 + interestSave / 100)
        risk *= (1 + interestRisk / 100);

        yearlySpendings.push(<tr key={i}><td>Year {i + 1}</td><td>{formatter.format(Math.round(save * 100) / 100)}</td><td>{formatter.format(Math.round(risk * 100) / 100)}</td><td>{formatter.format(Math.round((save + risk) * 100) / 100)}</td></tr>);
    }

    return (
        <div>
            <div>
                <FinanceInput id='initial-save' label='Initial save' value={initialFortuneSave} onChange={setInitialFortuneSave} />
                <FinanceInput id='initial-risk' label='Initial risk' value={initialFortuneRisk} onChange={setInitialFortuneRisk} />
                <FinanceInput id='monthly-save' label='Yearly save' value={yearlyFortuneSave} onChange={setYearlyFortuneSave} />
                <FinanceInput id='monthly-risk' label='Yearly risk' value={yearlyFortuneRisk} onChange={setYearlyFortuneRisk} />
                <FinanceInput id='interest-save' label='Interest save' value={interestSave} onChange={setInterestSave} />
                <FinanceInput id='interest-risk' label='Interest risk' value={interestRisk} onChange={setInterestRisk} />
                <FinanceInput id='years' label='Years' value={years} onChange={setYears} />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>Save</th>
                            <th>Risk</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearlySavings}
                    </tbody>
                </table>
            </div>
            <div>
                <FinanceInput id='retirement-years' label='Retirement years' value={retirementYears} onChange={setRetirementYears} />
                <FinanceInput id='costs-per-year' label='Costs per year' value={costsPerYear} onChange={setCostsPerYear} />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>Save</th>
                            <th>Risk</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearlySpendings}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
