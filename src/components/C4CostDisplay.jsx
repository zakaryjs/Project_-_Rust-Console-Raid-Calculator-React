import '../styles/C4CostDisplay.css'

export default function C4CostDisplay( { C4Value }) {

    if (C4Value) {
        return (
            <div>
                <div id='c4Div'>
                    {C4Value && <p>Sulphur: {C4Value.C4Sulphur}</p>}
                    {C4Value && <p>Tech Trash: {C4Value.C4TechTrash}</p>}
                    {C4Value && <p>Explosives: {C4Value.C4Explosives}</p>}
                    {C4Value && <img width={65} height={65} src={require('../images/explosives.png')} alt="explosives icon"/>}
                    {C4Value && <p>Explosives Sulphur: {C4Value.explosivesSulphur}</p>}
                    {C4Value && <p>Explosives Gunpowder: {C4Value.explosivesGunpowder}</p>}
                    {C4Value && <p>Explosives Low Grade: {C4Value.explosivesLowGrade}</p>}
                    {C4Value && <p>Explosives Frags: {C4Value.explosivesFrags}</p>}
                </div>
            </div>  
            )      
    }
}
