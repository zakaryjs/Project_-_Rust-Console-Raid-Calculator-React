import { useState } from "react";


export default function RaidCalcForm( { onFormSubmit }) {
    const [rocketQuery, setRocketQuery] = useState(0)

    async function FormSubmit(event) {
        event.preventDefault()
        onFormSubmit(rocketQuery)
        console.log(`Calculating the raid cost for ${rocketQuery} rockets...`)
        calculateRocket(rocketQuery)
        

    }

    let handleValueChange = (event) => {
        setRocketQuery(event.target.value)
    }

    function calculateRocket(rocketValue) {
        let sulphur = (rocketValue*1400)
        let pipes = (rocketValue*2)
        let gunpowder = (rocketValue*150)
        let explosives = (rocketValue*10)
        console.log(`The sulphur cost for ${rocketValue} rockets is ${sulphur} sulphur.`)
        console.log(`The pipe cost for ${rocketValue} rockets is ${pipes} pipes.`)
        console.log(`The gunpowder cost for ${rocketValue} rockets is ${gunpowder} gunpowder.`)
        console.log(`The explosives cost for ${rocketValue} rockets is ${explosives} explosives.`)
        return sulphur, pipes, gunpowder, explosives
    }


    return (
        <div id='searchBar'>
            <form name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
            <input type="text" onChange={handleValueChange} id="searchName" placeholder="Enter rockets here..." />
            </form>
        </div>    
        )
}