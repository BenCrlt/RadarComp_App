import '../../styles/ModelEvaluation/Evaluation.css'
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Skill from './Skill';
import { fetchListSkills, fetchListItems } from '../../store/common/actions';
import { NoterType, StateType } from '../../types/common/main';

type PropsFromRedux = ConnectedProps<typeof connector>;

function Evaluation({listSkills, listNotes, fetchListSkills, fetchListItems } : PropsFromRedux) {
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
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => SendEvaluation(listNotes)}>Envoyer</button>
                </div>
        </div>
    )
}

function SendEvaluation(listItems : NoterType[]) {
}

const mapStateToProps = (state : StateType) => {
    return {
        listNotes: state.eval.listNotes,
        listSkills: state.common.listSkills
    }
}

const mapDispatchToProps = { fetchListSkills, fetchListItems }

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Evaluation);