import { 
    UPDATE_ITEM_VALUE, 
    FETCH_LIST_SKILLS_BEGIN, 
    FETCH_LIST_SKILLS_SUCCESS, 
    FETCH_LIST_SKILLS_ERROR 
} from './actions'

const initialState : StateEvalType = {
    listValueItems: [],
    listSkills: [],
    error: null
};

const evalReducer = (state = initialState, action : any) => {
    let nextState : StateEvalType;
    switch(action.type) {
        case UPDATE_ITEM_VALUE:
            const indexValue = state.listValueItems.findIndex(item => item.item_id === action.value.item_id);
            if (indexValue !== -1) {
                nextState = {
                    ...state,
                    listValueItems: state.listValueItems.map((item, index) => {
                        if (index === indexValue) {
                            item.value = action.value.value;
                        }
                        return item;
                    })
                }
            } else {
                nextState = {
                    ...state,
                    listValueItems: [...state.listValueItems, action.value]
                }
            }
            return nextState || state;
        case FETCH_LIST_SKILLS_BEGIN:
            return { ...state}
        case FETCH_LIST_SKILLS_SUCCESS:
            return {...state , listSkills: action.skills } 
        case FETCH_LIST_SKILLS_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
}

export default evalReducer;
