import { 
    FETCH_LIST_ITEMS_BEGIN,
    FETCH_LIST_ITEMS_ERROR,
    FETCH_LIST_ITEMS_SUCCESS,
    FETCH_LIST_SKILLS_BEGIN,
    FETCH_LIST_SKILLS_ERROR,
    FETCH_LIST_SKILLS_SUCCESS 
} from "../common/actions";

const initialState = {
    listItems: [],
    listSkills: [],
    error: null
}
const commonReducer = (state = initialState, action : any) => {
    switch(action.type) {
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

export default commonReducer;
