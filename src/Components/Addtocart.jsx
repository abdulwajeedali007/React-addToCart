import React from 'react'
import '../index.css'
function Addtocart(props) {
    const {cartItems, addToCart, removeToCart} = props;


    //    cart total price options

    const totalprice = cartItems.reduce((a,c)=> a + c.price * c.qty, 0);
    const taxprice = totalprice * 0.04;
    const shippingprice = totalprice > 2000 ? 0 : 50;
    
    const total = totalprice + taxprice + shippingprice
    
    
    return (
        <div>
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>

            {cartItems.map(item => (
               <div className="cart_main" key={item.id}> 
                  <div className="item_name">{item.name}</div>
                  <div className="item_btns">
                     <button className="addBtn" onClick={() => addToCart(item)}>+</button>
                     <button className="removeBtn" onClick={() =>removeToCart(item)}>-</button>
                  </div>
                  <div className="qty_price">
                  {item.qty} x ${item.price.toFixed(2)}
                  </div>
               </div> 
            ))}
            {
                cartItems.length !== 0 &&
                (
                    <>
                  <hr/>
                  <div className="priceItems">
                    <p>Price</p>
                    <h4>${totalprice.toFixed(2)}</h4>
                  </div>
                  <div className="priceItems">
                    <p>Tax Price</p>
                    <h4>${taxprice.toFixed(2)}</h4>
                  </div>
                  <div className="priceItems">
                    <p>Shipping Price</p>
                    <h4>${shippingprice.toFixed(2)}</h4>
                  </div>
                  <div className="priceItems total">
                    <p>Total</p>
                    <h4>${total.toFixed(2)}</h4>
                  </div>
                  <div className="checkoutbtn">
                    <button className="checkout" onClick={()=> alert('Need to clear the checkout options')}>Checkout</button>
                  </div>
                </>
                )
            }
            
        </div>
    )
}

export default Addtocart
