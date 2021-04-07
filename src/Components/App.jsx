import React, { useState } from 'react'
import data from '../data'
import Addtocart from './Addtocart'
import Header from './Header'
import Main from './Main'

function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) =>{
        const exist = cartItems.find((x)=> x.id === product.id)
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                 ( x.id === product.id ? {...exist, qty: exist.qty + 1}: x)
                )
            )
        }else {
       setCartItems([...cartItems, {...product, qty: 1}])
    }
    }



   const removeToCart = (product) =>{

     const exist = cartItems.find((x)=> x.id === product.id);

     if(exist.qty === 1){
         setCartItems(cartItems.filter((x)=> x.id !== product.id))

     }else{
        setCartItems(
            cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
        )
     }
   }
    


    return (
        
        <div className="Main">
            <Header cartValue = {cartItems.length }></Header>
            <div className="container">
                <div className="main" >
                <Main products={products} addToCart={addToCart}/>
                </div>
                <div className="cartitems">
                    <Addtocart cartItems={cartItems} addToCart={addToCart} removeToCart={removeToCart}/>
                </div>
            </div>
        </div>
    )
}

export default App
