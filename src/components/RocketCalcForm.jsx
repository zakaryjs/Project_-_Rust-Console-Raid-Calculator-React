import { useState } from "react";
import '../styles/RocketCalcForm.css'

export default function RocketCalcForm( { onFormSubmit }) {
    const [rocketQuery, setRocketQuery] = useState(0)

    async function FormSubmit(event) {
        event.preventDefault()
        onFormSubmit(rocketQuery)
        console.log(`Calculating the raid cost for ${rocketQuery} rockets...`)
        calculateRocket(rocketQuery)
        event.target.reset()
    }

    let handleValueChange = (event) => {
        setRocketQuery(event.target.value)
    }

    function calculateRocket(rocketValue) {
        let rocketSulphur = (rocketValue*1400)
        let rocketPipes = (rocketValue*2)
        let rocketGunpowder = (rocketValue*150)
        let rocketExplosives = (rocketValue*10)

        let explosives = (rocketValue*10)
        let explosivesSulphur = (explosives*110)
        let explosivesLowGrade = (explosives*3)
        let explosivesGunpowder = (explosives*50)
        let explosivesFrags = (explosives*10)

        let raidCost = {
            rocketSulphur: rocketSulphur,
            rocketPipes: rocketPipes,
            rocketGunpowder: rocketGunpowder,
            rocketExplosives: rocketExplosives,
            explosivesSulphur: explosivesSulphur,
            explosivesLowGrade: explosivesLowGrade,
            explosivesGunpowder: explosivesGunpowder,
            explosivesFrags: explosivesFrags
        }
        onFormSubmit(raidCost)
    }

    return (
        <div id='searchBar'>
            <h2>Rocket Calculator</h2>
            <form autoComplete="off" name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
                <div>
                <img width={65} height={65} src={require('../images/ammo.rocket.basic.png')} alt="rocket ammo icon" />
                <input type="text" onChange={handleValueChange} name="rocketForm" id="searchName" placeholder="Enter rockets here..." />
                </div>            
            </form>
        </div>    
        )
}