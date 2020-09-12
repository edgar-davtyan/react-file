import React from "react";
import './MainBox.css'


function MainBox (props) {
    return (
        <div className={'MainBox'}>
            <div>
                <p>{props.number}</p>
                <button onClick={props.onDeleteBox}>Delete</button>
            </div>
        </div>
    )
}
export default MainBox
