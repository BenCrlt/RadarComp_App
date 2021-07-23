import { EvalType } from '../../types/common/main';
import { 
    UPDATE_NOTE_ITEM, 
    FETCH_LIST_SKILLS_BEGIN, 
    FETCH_LIST_SKILLS_SUCCESS, 
    FETCH_LIST_SKILLS_ERROR,
    FETCH_LIST_ITEMS_BEGIN,
    FETCH_LIST_ITEMS_ERROR,
    FETCH_LIST_ITEMS_SUCCESS
} from './actions'

const initialState : EvalType = {
    date: new Date(),
    listSkills: [],
    listItems: [],
    listNotes: [],
    error: null
};

const evalReducer = (state = initialState, action : any) => {
    let nextState : EvalType;
    switch(action.type) {
        case UPDATE_NOTE_ITEM:
            const indexValue = state.listNotes.findIndex(item => item.noter_item_id === action.value.noter_item_id);
            if (indexValue !== -1) {
                nextState = {
                    ...state,
                    listNotes: state.listNotes.map((item, index) => {
                        if (index === indexValue) {
                            item.noter_value = action.value.noter_value;
                        }
                        return item;
                    })
                }
            } else {
                nextState = {
                    ...state,
                    listNotes: [...state.listNotes, action.value]
                }
            }
            return nextState || state;
        case FETCH_LIST_SKILLS_BEGIN:
            return { ...state}
        case FETCH_LIST_SKILLS_SUCCESS:
            return {...state , listSkills: action.skills } 
        case FETCH_LIST_SKILLS_ERROR:
            return {...state, error: action.error } 
        case FETCH_LIST_ITEMS_BEGIN:
            return { ...state}
        case FETCH_LIST_ITEMS_SUCCESS:
            return { ...state, listItems: action.items}
        case FETCH_LIST_ITEMS_ERROR:
            return { ...state, error: action.error}
        default:
            return state;
    }
}

export default evalReducer;
