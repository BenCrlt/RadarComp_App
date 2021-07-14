import '../../styles/ModelEvaluation/Evaluation.css'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Skill from './Skill';

function Evaluation({user, listValueItems}) {
    const [listSkills, setListSkills] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/list_skills')
        .then(res => {
            setListSkills(res.data);
        });
    }, [])
    const rangeScale = 5;
    const date = new Date().toLocaleDateString();
    return (
        <div className="rca-eval">
            <h1 className="border-bottom">Evaluation {date}</h1>
                <div className="rca-eval-skill-list">
                    {listSkills.map((skill) => (
                        <Skill skill={skill} key={skill.skill_id} rangeScale={rangeScale}/>
                    ))}
                </div>
                <div className="rca-eval-skill-button">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => SendEvaluation(listValueItems)}>Envoyer</button>
                </div>
        </div>
    )
}

function SendEvaluation(listItems) {
    console.log(listItems);
}

const mapStateToProps = (state) => {
    return {
        listValueItems: state.listValueItems
    }
}

export default connect(mapStateToProps)(Evaluation);