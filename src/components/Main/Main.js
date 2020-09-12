import React from "react";
import './Main.css'
import MainBox from "./MainBox/MainBox";
import Header from "../Header/Header";
import Button from "../UI/Button/Button";

class Main extends React.Component {
    states = {
        num: [

        ]
    };
    state = {
        numbers: [
            {number: 0}
        ]
    };

    sortCards = () => {

    };

    addCard = () => {
        let count = 0;
        for (let i = 0; i < this.state.numbers.length; i++) {
            if (this.state.numbers.length >= 0) {
                const num = this.state.numbers.length;
                const nums = {number: num};
                const countNum = this.state.numbers.push(nums);
                this.setState({countNum});
                break;
            }
            count++
        }
    };

    onDeleteName = (name, index) => {
        const num = this.state.numbers[index];
        const nums = {...this.state.numbers};
        if (num === nums[index]) {
            const deleteNum = this.state.numbers.shift(num);
            this.setState({deleteNum})
        }
    };

    render() {
        return (
            <div className={'Main'}>
                <div style={{width: '100%'}}>
                    <Header>
                        <Button name={'add card'} onClick={this.addCard}/>
                        <Button name={'sort cards'} onClick={this.sortCards}/>
                    </Header>
                </div>
                {this.state.numbers.map((num, index) => {
                    return (
                        <MainBox
                            key={index}
                            number={num.number}
                            count={this.state.count}
                            onDeleteBox={(event) => this.onDeleteName(event.target.value, index)}
                        />
                    )
                })}
            </div>
        );
    }

}

export default Main
