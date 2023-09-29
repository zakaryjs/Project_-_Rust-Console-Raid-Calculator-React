import header from "./Header";
import '../styles/RustRaidParent.css'
import { useState } from "react";
import RocketCalcForm from "./RocketCalcForm";
import C4CalcForm from "./C4CalcForm";
import RocketCostDisplay from "./rocketCostDisplay"
import C4CostDisplay from "./C4CostDisplay";

export default function RustRaidParent() {

    const [rocketValue, setRocketValue] = useState(0)

    const handleFormSubmit = (data) => {
        setRocketValue(data)
    }

    const [C4Value, setC4Value] = useState(0)

    const handleC4Submit = (data) => {
        setC4Value(data)
    }

    return (
        <div className="App">
            {header}
            <RocketCalcForm onFormSubmit={handleFormSubmit} />
            <RocketCostDisplay rocketValue={rocketValue}/>
            <C4CalcForm onFormSubmit={handleC4Submit} />
            <C4CostDisplay C4Value={C4Value} />
        </div>
    )
}