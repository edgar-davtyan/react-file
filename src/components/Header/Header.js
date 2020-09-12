import React from "react"
import './Header.css'


class Header extends React.Component {
    render() {
        return (
            <header className={'Header'}>
                {this.props.children}
            </header>
        )
    }
}

export default Header