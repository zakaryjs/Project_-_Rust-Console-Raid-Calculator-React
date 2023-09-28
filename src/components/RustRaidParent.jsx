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
            {rocketValue && <p>Sulphur: {rocketValue.rocketSulphur}</p>}
            {rocketValue && <p>Pipes: {rocketValue.rocketPipes}</p>}
            {rocketValue && <p>Gunpowder: {rocketValue.rocketGunpowder}</p>}
            {rocketValue && <p>Explosives: {rocketValue.rocketExplosives}</p>}
            {rocketValue && <p>Explosives Sulphur: {rocketValue.explosivesSulphur}</p>}
            {rocketValue && <p>Explosives Low Grade: {rocketValue.explosivesLowGrade}</p>}
            {rocketValue && <p>Explosives Gunpowder: {rocketValue.explosivesGunpowder}</p>}
            {rocketValue && <p>Explosives Frags: {rocketValue.explosivesFrags}</p>}
        </div>
    )
}