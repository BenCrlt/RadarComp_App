import '../../styles/ModelEvaluation/Skill.css'
import Item from './Item'
import { connect, ConnectedProps } from 'react-redux';
import { SkillType, StateType } from '../../types/common/main';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface SkillProps extends PropsFromRedux {
    skill: SkillType,
    rangeScale: number
}

function Skill({skill, rangeScale, listItems} : SkillProps) {
    return (
        <div className="rca-skill">
            <h2>{skill.skill_title}</h2>
            <ul>
                {listItems.map((item) => (
                        item.item_skill.skill_id === skill.skill_id && <Item item={item} key={item.item_id} rangeScale={rangeScale}/>
                    ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state : StateType) => {
    return {
        listItems: state.common.listItems
    }
}

const connector = connect(mapStateToProps);

export default connector(Skill);