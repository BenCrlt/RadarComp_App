import '../../styles/ModelEvaluation/Skill.css'
import Item from './Item'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Skill({skill, rangeScale}) {
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/list_items/' + skill.skill_id)
        .then(res => {
            setListItems(res.data);
            console.log(res.data);
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