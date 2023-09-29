import { useState } from "react";
import '../styles/C4CalcForm.css'

export default function C4CalcForm( { onFormSubmit }) {
    const [C4Query, setC4Query] = useState(0)

    async function FormSubmit(event) {
        event.preventDefault()
        onFormSubmit(C4Query)
        console.log(`Calculating the raid cost for ${C4Query} C4s...`)
        calculateC4(C4Query)
        event.target.reset()
    }

    let handleValueChange = (event) => {
        setC4Query(event.target.value)
    }

    function calculateC4(C4Value) {
        let C4Sulphur = (C4Value*2200)
        let C4TechTrash = (C4Value*2)
        let C4Explosives = (C4Value*20)

        let explosives = (C4Value*20)
        let explosivesSulphur = (explosives*110)
        let explosivesLowGrade = (explosives*3)
        let explosivesGunpowder = (explosives*50)
        let explosivesFrags = (explosives*10)

        let raidCost = {
            C4Sulphur: C4Sulphur,
            C4TechTrash: C4TechTrash,
            C4Explosives: C4Explosives,
            explosivesSulphur: explosivesSulphur,
            explosivesLowGrade: explosivesLowGrade,
            explosivesGunpowder: explosivesGunpowder,
            explosivesFrags: explosivesFrags
        }
        onFormSubmit(raidCost)
    }

    return (
        <div id='searchBar'>
            <h2>C4 Calculator</h2>
            <form autoComplete="off" name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
                <div>
                <img width={65} height={65} src={require('../images/explosive.timed.png')} alt="C4 ammo icon" />
                <input type="text" onChange={handleValueChange} name="C4Form" id="searchName" placeholder="Enter C4s here..." />
                </div>            
            </form>
        </div>    
        )
}