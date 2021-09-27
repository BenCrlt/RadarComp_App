import '../../styles/ModelEvaluation/CreateEvaluation.css'
import { connect, ConnectedProps } from 'react-redux';
import {StateType } from '../../types/common/main'
import { useMutation, gql } from '@apollo/client';
import {NoterType, EvalType} from '../../types/common/main'
import {useEffect} from 'react'
import {useHistory } from 'react-router-dom'

type PropsFromRedux = ConnectedProps<typeof connector>;

const CREATE_EVALUATION = gql`
    mutation Mutation($createEvaluationUserId: ID!) {
        createEvaluation(user_id: $createEvaluationUserId) {
            eval_id
        }
    }
`

const ADD_NOTE_TO_EVAL = gql`
    mutation Mutation($addNoteToEvalIdEval: ID!, $addNoteToEvalIdItem: ID!, $addNoteToEvalValue: Int!) {
        addNoteToEval(id_eval: $addNoteToEvalIdEval, id_item: $addNoteToEvalIdItem, value: $addNoteToEvalValue) {
            noter_eval {
                eval_id
            }
            noter_item {
                item_id
            }
    }
}`

function CreateEvaluation({listNotes, user} : PropsFromRedux) {
    const history = useHistory();
    const [createEval, {data: data_createEval}] = useMutation<{createEvaluation : EvalType}, {createEvaluationUserId: string}>(CREATE_EVALUATION, {
        variables: {createEvaluationUserId: user.user_id}
    })
    const [addNoteToEval] = useMutation<{addNoteToEval: NoterType}, {addNoteToEvalIdEval: string, addNoteToEvalIdItem: string, addNoteToEvalValue: Number}>(ADD_NOTE_TO_EVAL);
    
    useEffect(() => {
        if (data_createEval) {
            listNotes.forEach(async note => {
                await addNoteToEval({variables: {
                    addNoteToEvalIdEval: data_createEval.createEvaluation.eval_id,
                    addNoteToEvalIdItem: note.item_id,
                    addNoteToEvalValue: note.note
                }})
            });
            history.push("/home");
        }
    }, [data_createEval, addNoteToEval, listNotes, history])

    return (
        <div className="rca-eval-skill-button">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => createEval()}>Envoyer</button>
        </div>
    )
}

const mapStateToProps = (state : StateType) => {
    return {
        listNotes: state.common.listNotes,
        user: state.common.user
    }
}

const connector = connect(mapStateToProps);

export default connector(CreateEvaluation)