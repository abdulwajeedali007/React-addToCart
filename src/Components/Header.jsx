import React from 'react'
import '../index.css'

function Header(props) {
    const {cartValue} = props;
    return (
        <div className="header_container">
            <h1>Ultra Shope</h1>
            <p>Cart <span>{cartValue}</span></p>
        </div>
    )
}

export default Header
