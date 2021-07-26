import { 
    FETCH_LIST_ITEMS_BEGIN,
    FETCH_LIST_ITEMS_ERROR,
    FETCH_LIST_ITEMS_SUCCESS,
    FETCH_LIST_SKILLS_BEGIN,
    FETCH_LIST_SKILLS_ERROR,
    FETCH_LIST_SKILLS_SUCCESS,
    CONNECT_USER_BEGIN,
    CONNECT_USER_ERROR,
    CONNECT_USER_SUCCESS,
    DISCONNECT_USER,
    SET_USER
} from "../common/actions";

const initialState = {
    user: {
        user_id : -1,
        user_last_name : "",
        user_first_name : "",
        user_email : "",
        user_password : ""
    },
    isUserConnected : false,
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
        case CONNECT_USER_BEGIN:
            return { ...state, isUserConnected : false}
        case CONNECT_USER_SUCCESS: 
            return { ...state, user: action.user, isUserConnected : true }
        case CONNECT_USER_ERROR: 
            return { ...state, error: action.error, isUserConnected : false }
        case DISCONNECT_USER:
            return { ...state, isUserConnected : false, user : initialState.user}
        case SET_USER:
            if (action.user.user_id !== -1) {
                return { ...state, user : action.user, isUserConnected: false}
            }
            return { ...state}
        default:
            return state;
    }
}

export default commonReducer;
