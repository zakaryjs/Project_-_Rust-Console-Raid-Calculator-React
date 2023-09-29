import '../styles/RaidCostDisplay.css'

export default function RaidCostDisplay( { rocketValue }) {


    return (
        <div>
        {rocketValue && <p>Sulphur: {rocketValue.rocketSulphur}</p>}
        {rocketValue && <p>Gunpowder: {rocketValue.rocketGunpowder}</p>}
        {rocketValue && <p>Pipes: {rocketValue.rocketPipes}</p>}
        {rocketValue && <p>Explosives: {rocketValue.rocketExplosives}</p>}
        {rocketValue && <img width={120} height={120} src={require('../images/explosives.png')} alt="explosives icon"/>}
        {rocketValue && <p>Explosives Sulphur: {rocketValue.explosivesSulphur}</p>}
        {rocketValue && <p>Explosives Gunpowder: {rocketValue.explosivesGunpowder}</p>}
        {rocketValue && <p>Explosives Low Grade: {rocketValue.explosivesLowGrade}</p>}
        {rocketValue && <p>Explosives Frags: {rocketValue.explosivesFrags}</p>}
        </div>  
        )
}
