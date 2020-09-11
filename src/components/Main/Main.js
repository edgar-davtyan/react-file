import React from "react";
import './Main.css'
import MainBox from "./MainBox/MainBox";

class Main extends React.Component {
    state = {
        numbers: [
            {number: 1},
            {number: 2},
            {number: 3},
        ]
    };

    deleteBox() {

        const num = {number: 4};
        this.setState({
            numbers: [...this.state.numbers, num]
        })
    };

    render() {
        return (
            <div className={'Main'}>
                {this.state.numbers.map((num, index) => {
                    return (
                        <MainBox
                            key={index}
                            number={num.number}
                            onClick={this.deleteBox()}
                        />
                    )
                })}
            </div>
        );
    }

}

export default Main
