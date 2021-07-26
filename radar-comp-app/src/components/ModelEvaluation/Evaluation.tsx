import '../../styles/ModelEvaluation/Evaluation.css'
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Skill from './Skill';
import { fetchListSkills, fetchListItems } from '../../store/common/actions';
import { StateType } from '../../types/common/main';
import config  from '../../config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

type PropsFromRedux = ConnectedProps<typeof connector>;

function Evaluation({listSkills, listNotes, user, fetchListSkills, fetchListItems } : PropsFromRedux) {
    useEffect(() => {
        fetchListSkills()
            .then(res => { fetchListItems()})
    }, [fetchListSkills, fetchListItems])
    const rangeScale = 5;
    const date = new Date().toLocaleDateString();
    const history = useHistory();
    const SendEvaluation = () => {
        console.log(listNotes);
        axios.post(config.url + '/api/eval/create_eval', {
            user_id : user.user_id,
            date : new Date().toISOString().slice(0, 19).replace('T', ' '),
            listNotes: listNotes
        })
        .then(res => { history.push('/home')})
        .catch(err => { console.error(err)});
    }

    return (
        <div className="rca-eval">
            <h1 className="border-bottom">Evaluation {date}</h1>
                <div className="rca-eval-skill-list">
                    {listSkills.map((skill) => (
                        <Skill skill={skill} key={skill.skill_id} rangeScale={rangeScale}/>
                    ))}
                </div>
                <div className="rca-eval-skill-button">
                    <button type="button" className="btn btn-primary btn-lg" onClick={SendEvaluation}>Envoyer</button>
                </div>
        </div>
    )
}

const mapStateToProps = (state : StateType) => {
    return {
        listNotes: state.eval.listNotes,
        listSkills: state.common.listSkills,
        user: state.common.user
    }
}

const mapDispatchToProps = { fetchListSkills, fetchListItems }

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Evaluation);