import React from 'react'

import '../index'

import Product from './Product'

function Main(props) {
    const {products, addToCart, removeToCart} = props
    
    return (
        <div className="cart__container">
            <Product products = {products} addToCart={addToCart} removeToCart={removeToCart}/>
        </div>
    )
}

export default Main
