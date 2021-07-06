import '../../styles/ModelEvaluation/Evaluation.css'
import {listEval} from '../../datas/formEval.js'
import Skill from './Skill';

function Evaluation({user}) {
    const rangeScale = 5;
    return (
        <div className="rca-eval">
            <h1 className="border-bottom">Evaluation {getDateString()}</h1>
                <div className="rca-eval-skill-list">
                    {listEval.map((skill) => (
                        <Skill skill={skill} key={skill.id} rangeScale={rangeScale}/>
                    ))}
                </div>
                <div className="rca-eval-skill-button">
                    <button type="button" className="btn btn-primary btn-lg">Envoyer</button>   
                </div>
        </div>
    )
}

function getDateString() {
    const date = new Date(),
        day = date.getDay() >= 10 ? date.getDay() : "0" + date.getDay(),
        month = date.getMonth() >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth()+1),
        year = date.getFullYear();
    return day + "/" + month + "/" + year;
}
export default Evaluation;