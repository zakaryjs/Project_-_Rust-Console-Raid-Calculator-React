import header from "./Header";
import '../styles/RustRaidParent.css'
import { useState } from "react";
import RocketCalcForm from "./RocketCalcForm";
import C4CalcForm from "./C4CalcForm";

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
            {rocketValue && <p>Sulphur: {rocketValue.rocketSulphur}</p>}
            {rocketValue && <p>Gunpowder: {rocketValue.rocketGunpowder}</p>}
            {rocketValue && <p>Pipes: {rocketValue.rocketPipes}</p>}
            {rocketValue && <p>Explosives: {rocketValue.rocketExplosives}</p>}
            {rocketValue && <img width={120} height={120} src={require('../images/explosives.png')} alt="explosives icon"/>}
            {rocketValue && <p>Explosives Sulphur: {rocketValue.explosivesSulphur}</p>}
            {rocketValue && <p>Explosives Gunpowder: {rocketValue.explosivesGunpowder}</p>}
            {rocketValue && <p>Explosives Low Grade: {rocketValue.explosivesLowGrade}</p>}
            {rocketValue && <p>Explosives Frags: {rocketValue.explosivesFrags}</p>}
            <C4CalcForm onFormSubmit={handleC4Submit} />
            {C4Value && <p>Sulphur: {C4Value.C4Sulphur}</p>}
            {C4Value && <p>Tech Trash: {C4Value.C4TechTrash}</p>}
            {C4Value && <p>Explosives: {C4Value.C4Explosives}</p>}
            {C4Value && <img width={120} height={120} src={require('../images/explosives.png')} alt="explosives icon"/>}
            {C4Value && <p>Explosives Sulphur: {C4Value.explosivesSulphur}</p>}
            {C4Value && <p>Explosives Gunpowder: {C4Value.explosivesGunpowder}</p>}
            {C4Value && <p>Explosives Low Grade: {C4Value.explosivesLowGrade}</p>}
            {C4Value && <p>Explosives Frags: {C4Value.explosivesFrags}</p>}
        </div>
    )
}