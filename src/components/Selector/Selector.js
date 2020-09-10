import React from "react";
import './styles.css'

function Selector(props) {

    const smallData = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const hugeData = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
        <div className={'selector'}>
            <button type="button" className="btn btn-primary" onClick={() => props.selectMode(smallData)}>Маленький объём данных <br/> 32 элемента</button>
            <button type="button" className="btn btn-secondary" onClick={() => props.selectMode(hugeData)}>Большой объём данных <br/> 1000 элементов</button>
        </div>
    )
}

export default Selector