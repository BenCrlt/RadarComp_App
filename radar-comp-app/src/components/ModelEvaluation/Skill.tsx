import '../../styles/ModelEvaluation/Skill.css'
import Item from './Item'
import { SkillType } from '../../types/common/main';

interface SkillProps {
    skill: SkillType,
    rangeScale: number
}

function Skill({skill, rangeScale} : SkillProps) {
    return (
        <div className="rca-skill">
            <h2>{skill.skill_title}</h2>
            <ul>
                {skill.skill_items.map((item) => (
                        <Item item={item} key={item.item_id} rangeScale={rangeScale}/>
                    ))}
            </ul>
        </div>
    )
}

export default Skill;