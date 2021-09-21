import { CommonStateType } from "../../types/common/main";
import { 
    CONNECT_USER,
    DISCONNECT_USER,
    SET_USER,
    CLEAR_LIST_NOTES,
    UPDATE_LIST_NOTES
} from "../common/actions";

const initialState : CommonStateType = {
    user: {
        user_id : "",
        user_last_name : "",
        user_first_name : "",
        user_email : "",
        user_password : "",
        user_list_evals: []
    },
    isUserConnected : false,
    listNotes: []
}
const commonReducer = (state = initialState, action : any) => {
    let nextState : CommonStateType;
    switch(action.type) {
        case CONNECT_USER: 
            return { ...state, user: action.user, isUserConnected : true }
        case DISCONNECT_USER:
            return { ...state, isUserConnected : false, user : initialState.user}
        case SET_USER:
            if (action.user.user_id !== -1) {
                return { ...state, user : action.user, isUserConnected: false}
            }
            return { ...state}
        case CLEAR_LIST_NOTES: 
            return { ...state, listNotes: []}
        case UPDATE_LIST_NOTES:
            const indexValue = state.listNotes.findIndex(item => item.item_id === action.value.item_id);
            if (indexValue !== -1) {
                nextState = {
                    ...state,
                    listNotes: state.listNotes.map((item, index) => {
                        if (index === indexValue) {
                            item.note = action.value.note;
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
        default:
            return state;
    }
}

export default commonReducer;
