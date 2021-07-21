import '../../styles/ModelEvaluation/Skill.css'
import Item from './Item'
import { useState, useEffect } from 'react';
import axios from 'axios';

type Skill = {
    skill_id : number,
    skill_title : string
}

type SkillProps = {
    skill: Skill,
    rangeScale: number
}

type ItemType = {
    item_id: number,
    item_skill_id: number,
    item_title: string
}

function Skill({skill, rangeScale} : SkillProps) {
    const [listItems, setListItems] = useState<ItemType[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/list_items/' + skill.skill_id)
        .then(res => {
            setListItems(res.data);
        });
    }, [])
    return (
        <div className="rca-skill">
            <h2>{skill.skill_title}</h2>
            <ul>
                {listItems.map((item) => (
                        <Item item={item} key={item.item_id} rangeScale={rangeScale}/>
                    ))}
            </ul>
        </div>
    )
}

export default Skill;