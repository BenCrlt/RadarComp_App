const initialState = {listValueItems: []}

function addItemValue(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'UPDATE_ITEM_VALUE':
            const indexValue = state.listValueItems.findIndex(item => item.id === action.value.id);
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