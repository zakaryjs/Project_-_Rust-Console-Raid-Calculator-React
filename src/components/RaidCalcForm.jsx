import { useState } from "react";
import '../styles/RaidCalcForm.css'

export default function RaidCalcForm( { onFormSubmit }) {
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
        let sulphur = (rocketValue*1400)
        let pipes = (rocketValue*2)
        let gunpowder = (rocketValue*150)
        let explosives = (rocketValue*10)
        let raidCost = {
            sulphur: sulphur,
            pipes: pipes,
            gunpowder: gunpowder,
            explosives: explosives
        }
        onFormSubmit(raidCost)
    }


    return (
        <div id='searchBar'>
            <img width={60} height={60} src={require('../images/ammo.rocket.basic.png')} alt="rocket ammo icon"/>
            <form autoComplete="off" name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
            <input type="text" onChange={handleValueChange} id="searchName" placeholder="Enter rockets here..." />
            </form>
        </div>    
        )
}