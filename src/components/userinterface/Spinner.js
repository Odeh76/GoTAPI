import React from 'react'
import spinner from '../../img/spinner.gif'
const Spinner = () => {
    return (
        <img src={spinner} style={{ display: 'flex', alignItems: 'center', width: '200px', height: '200px', marginRight: 'auto', marginLeft: 'auto', backgroundPosition: 'center'}} alt=""/>
    )
}

export default Spinner
