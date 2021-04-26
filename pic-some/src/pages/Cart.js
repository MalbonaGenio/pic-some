import React, {useContext} from "react"
import CartElements from "../components/CartElements"
import {Context} from "../Context"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartItemsElements = cartItems.map(item => (
        <CartElements key={item.id} item={item} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart