import { EvalType } from "../../types/common/main";
import {ListGroup} from 'react-bootstrap'
import '../../styles/Home/ListEvaluations.css'

interface PropsType {
    listEvals: EvalType[]
}

function ListEvaluations({listEvals} : PropsType) {
    return (
        <div className='list-evaluations-main-container'>
            <div className="list-evaluations-title-container">
                <strong>Evaluations</strong>
            </div>
            <div className="list-evaluations-items-container">
                <ListGroup>
                    {listEvals.map(item => (
                        <ListGroup.Item action>{GetDate(item.eval_date)}</ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    )
}

function GetDate(date : Date) {
    let dateConverted : Date = new Date(date);
    return dateConverted.toLocaleDateString();
  }

export default ListEvaluations;