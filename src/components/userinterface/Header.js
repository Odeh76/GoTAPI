import React from 'react'
import gotlogo from '../../img/gotlogo.png';
const Header = () => {
    return (
        <header>
            <img src={gotlogo} style={{width: '300px', margin: 'auto', display: 'block'}} alt="Game of thrones logo"/>
        </header>
    )
}

export default Header
