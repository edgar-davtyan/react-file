import React from "react"
import './Header.css'
import Button from "../UI/Button/Button";


class Header extends React.Component {
    render() {
        return (
            <header className={'Header'}>
                <Button name={'add card'}/>
                <Button name={'sort cards'}/>
            </header>
        )
    }
}

export default Header