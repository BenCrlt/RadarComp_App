type ListItemsType = {
    item_id: number,
    item_skill_id: number,
    item_title: string,
    value: number
}

type StateType = {
    listValueItems: ListItemsType[]
}

const initialState : StateType = {listValueItems: []}

function addItemValue(state = initialState, action : any) {
    let nextState;
    switch (action.type) {
        case 'UPDATE_ITEM_VALUE':
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
    default:
        return state;
    }
}

export default addItemValue;