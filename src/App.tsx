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

    let save = initialFortuneSave;
    let risk = initialFortuneRisk;
    for (let i=0; i<years; i++) {
        save *= (1 + interestSave / 100)
        save += yearlyFortuneSave;

        risk *= (1 + interestRisk / 100);
        risk += yearlyFortuneRisk;
    }
    const total = Math.round((save + risk) * 100) / 100;

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
                <div>{total} €</div>
            </div>
        </div>
    )
}

export default App
