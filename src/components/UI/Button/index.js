import React from "react";
import './Button.css'
import {withRouter} from 'react-router-dom'

const Index = props => {
    return(
        <div className={'Button'}>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
};

export default withRouter(Index)