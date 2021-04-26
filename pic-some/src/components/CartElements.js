import React, { useContext } from "react"
import { Context } from "../Context"


function CartElements({item}) {
    const {removeFromCart} = useContext(Context)
    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>5,50€</p>
        </div>
    )
    
}

export default CartElements