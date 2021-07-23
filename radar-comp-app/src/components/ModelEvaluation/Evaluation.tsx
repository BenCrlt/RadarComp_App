import '../../styles/ModelEvaluation/Evaluation.css'
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Skill from './Skill';
import { fetchListSkills, fetchListItems } from '../../store/evaluation/actions';

type PropsFromRedux = ConnectedProps<typeof connector>;

function Evaluation({listValueItems, listSkills, fetchListSkills, fetchListItems } : PropsFromRedux) {
    useEffect(() => {
        fetchListSkills()
            .then(res => { fetchListItems()})
    }, [fetchListSkills, fetchListItems])
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

function SendEvaluation(listItems : ListItemsType[]) {
    console.log(listItems);
}

const mapStateToProps = (state : StateType) => {
    return {
        listValueItems: state.eval.listValueItems,
        listSkills: state.eval.listSkills
    }
}

const mapDispatchToProps = { fetchListSkills, fetchListItems }

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Evaluation);