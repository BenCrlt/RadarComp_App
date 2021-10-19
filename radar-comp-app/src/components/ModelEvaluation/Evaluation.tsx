import '../../styles/ModelEvaluation/Evaluation.css'
import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { connect, ConnectedProps } from 'react-redux';
import Skill from './Skill';
import { StateType, SkillType } from '../../types/common/main';
import { clearListNotes } from '../../store/common/actions';
import CreateEvaluation from './CreateEvaluation';

const GQL_EVALUATION = gql`
    query Query {
        listSkills {
            skill_id
            skill_title
            skill_items {
                item_id
                item_title
            }
        }
    } 
`

type PropsFromRedux = ConnectedProps<typeof connector>;

function Evaluation({user, listNotes, clearListNotes} : PropsFromRedux) {
    useEffect(() => {
        clearListNotes();   
    }, [clearListNotes]);
    const {data} = useQuery<{listSkills : SkillType[]}>( GQL_EVALUATION);
    const rangeScale = 5;
    const date = new Date().toLocaleDateString();
    return (
        <div className="rca-eval">
                <div className="rca-eval-skill-list-container">
                    <h1 className="border-bottom">Evaluation {date}</h1>
                    {data?.listSkills.map((skill) => (
                        <Skill skill={skill} key={skill.skill_id} rangeScale={rangeScale}/>
                    ))}
                </div>
                <div className="rca-eval-create-eval-container">
                    <CreateEvaluation/>
                </div>
        </div>
    )
}

const mapStateToProps = (state : StateType) => {
    return {
        listNotes: state.common.listNotes,
        user: state.common.user
    }
}

const mapDispatchToProps = {
    clearListNotes
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Evaluation);