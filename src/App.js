import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={'App-Box'}>
                    <Route path="/" exact component={Header}/>
                    <Route path="/" exact component={Main}/>
                </div>
            </div>
        )
    }
}

export default App;
