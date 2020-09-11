import React from "react";
import './MainBox.css'
import {withRouter} from 'react-router-dom'


const MainBox = props => {
    return (
        <div className={'MainBox'}>
            <div>
                <p>{props.number}</p>
                <button onClick={props.onClick}>Click</button>
            </div>
        </div>
    )
};
export default withRouter(MainBox)