import { EvalType } from "../../types/common/main";

interface PropsType {
    listEvals: EvalType[]
}

function ListEvaluations({listEvals} : PropsType) {
    return (
        <div>
            <h1>Evaluations</h1>
            <div>
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default ListEvaluations;