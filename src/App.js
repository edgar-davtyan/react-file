import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Main from "./components/Main/Main";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={'App-Box'}>
                    <Route path="/" exact component={Main}/>
                </div>
            </div>
        )
    }
}

export default App;
