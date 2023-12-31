import '../styles/RocketCostDisplay.css'

export default function RocketCostDisplay( { rocketValue }) {

    if (rocketValue) {
        return (
            <div>
                <div>
                    <p>Sulphur: {rocketValue.rocketSulphur}</p>
                    <p>Gunpowder: {rocketValue.rocketGunpowder}</p>
                    <p>Pipes: {rocketValue.rocketPipes}</p>
                    <p>Explosives: {rocketValue.rocketExplosives}</p>
                    <img width={65} height={65} src={require('../images/explosives.png')} alt="explosives icon"/>
                    <p>Explosives Sulphur: {rocketValue.explosivesSulphur}</p>
                    <p>Explosives Gunpowder: {rocketValue.explosivesGunpowder}</p>
                    <p>Explosives Low Grade: {rocketValue.explosivesLowGrade}</p>
                    <p>Explosives Frags: {rocketValue.explosivesFrags}</p>
                </div>
            </div>  
            )
    }
}
