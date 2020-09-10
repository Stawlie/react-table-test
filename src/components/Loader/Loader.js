import React from "react";
import './styles.css'

function Loader(props) {
    return (
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader