interface FinanceInputProps {
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export default function FinanceInput(props: FinanceInputProps) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type="number" onChange={e => props.onChange(parseFloat(e.target.value) || 0)} />
        </div>
    )
}