import '../../styles/ModelEvaluation/Item.css';
import { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ItemProps extends PropsFromRedux {
    item: ItemType,
    rangeScale: number,
}

function Item({item, rangeScale, dispatch} : ItemProps) {
    const [inputValue, setInputValue] = useState(0);
    useEffect(() => {
        const action = {type: 'UPDATE_ITEM_VALUE', value: {...item, id_skill: item.item_skill_id, value: inputValue}};
        dispatch(action);
	}, [inputValue])

    return (
        <li key={item.item_id} className="rca-item-li">
            <label className="form-label">{item.item_title}</label>
            <div className="rca-item-slider">
                <input type="range" className="form-range" width='100px' id="customRange1" min='0' max={rangeScale} value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} ></input>
            </div>
        </li>
    )
}

const mapDispatchToProps = (dispatch: any) => {
return {
    dispatch: (action: any) => { dispatch(action) }
}
}

const connector = connect(mapDispatchToProps);

export default connector(Item);