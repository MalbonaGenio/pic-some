import React, { useContext, useState } from "react"
import { Context } from "../Context"


function CartElements({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)

    const binIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return(
        <div className="cart-item">
            <i 
                className={binIcon}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >   
            </i>
            <img src={item.url} width="130px" />
            <p>5,50€</p>
        </div>
    )
    
}

export default CartElements