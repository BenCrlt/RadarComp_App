import '../../styles/ModelEvaluation/CreateEvaluation.css'
import { connect, ConnectedProps } from 'react-redux';
import {StateType } from '../../types/common/main'

type PropsFromRedux = ConnectedProps<typeof connector>;

function CreateEvaluation({listNotes} : PropsFromRedux) {
    const createEvaluation = () => {
        console.log(listNotes);
    }
    return (
        <div className="rca-eval-skill-button">
            <button type="button" className="btn btn-primary btn-lg" onClick={createEvaluation}>Envoyer</button>
        </div>
    )
}

const mapStateToProps = (state : StateType) => {
    return {
        listNotes: state.common.listNotes
    }
}

const connector = connect(mapStateToProps);

export default connector(CreateEvaluation)