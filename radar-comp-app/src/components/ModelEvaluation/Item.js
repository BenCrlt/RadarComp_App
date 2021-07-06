import '../../styles/ModelEvaluation/Item.css'

function Item({item, rangeScale}) {
    return (
        <li key={item.id} className="rca-item-li">
            <label className="form-label">{item.title}</label>
            <div className="rca-item-slider">
                <input type="range" className="form-range" width='100px' id="customRange1" min='0' max={rangeScale}></input>
            </div>
        </li>
    )
}

export default Item;