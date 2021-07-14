import '../../styles/ModelEvaluation/Item.css'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function Item({item, rangeScale, listValueItems, dispatch}) {
    const [inputValue, setInputValue] = useState(0);
    useEffect(() => {
        const action = {type: 'UPDATE_ITEM_VALUE', value: {...item, id_skill: item.item_skill_id, value: inputValue}};
        dispatch(action);
	}, [inputValue])

    return (
        <li key={item.id} className="rca-item-li">
            <label className="form-label">{item.item_title}</label>
            <div className="rca-item-slider">
                <input type="range" className="form-range" width='100px' id="customRange1" min='0' max={rangeScale} value={inputValue} onChange={(e) => setInputValue(e.target.value)} ></input>
            </div>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
return {
    dispatch: (action) => { dispatch(action) }
}
}

export default connect(mapDispatchToProps)(Item);