import '../../styles/ModelEvaluation/Skill.css'
import Item from './Item'

function Skill({skill, rangeScale}) {
    return (
        <div className="rca-skill">
            <h2>{skill.title}</h2>
            <ul>
                {skill.items.map((item) => (
                    <Item item={item} key={item.id} rangeScale={rangeScale}/>
                ))}
            </ul>
        </div>
    )
}

export default Skill;