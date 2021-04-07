import React from 'react'

import '../index'

function Product(props) {
    
  
    const {products, addToCart,removeToCart} = props;

 
    return (

        <div className="cart__Area">
        
            {products.map(product => {
                return (
                    <div key={product.id} className="cart">
                        <img src={product.image} alt=""/>
                        <div className="cart__content">
                            <div className="cart__title">
                                <h4>{product.name}</h4>
                            </div>
                            <div className="addtocard">
                                <p className="price">{product.price}</p>
                                <button className="btnaddcart" onClick={()=>addToCart(product)} removeToCart={removeToCart}>Add cart</button>
                            </div>
                        </div> 
                    </div>
                )
            })}
        
     </div>
    )
}

export default Product
