import React, { useContext, useState } from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"


function CartElements({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)

    const binIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return(
        <div className="cart-item">
            <i 
                className={binIcon}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >   
            </i>
            <img src={item.url} width="130px" />
            <p>5,50€</p>
        </div>
    )
    
}

export default CartElements