import header from "./Header";
import '../styles/RustRaidParent.css'
import { useState } from "react";
import RaidCalcForm from "./RaidCalcForm";

export default function RustRaidParent() {

    const [rocketValue, setRocketValue] = useState(0)

    const handleFormSubmit = (data) => {
        setRocketValue(data)
    }

    return (
        <div className="App">
            {header}
            <RaidCalcForm onFormSubmit={handleFormSubmit} />
        </div>
    )
}