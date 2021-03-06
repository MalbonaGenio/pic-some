import React, {useContext, useState} from "react"
import CartElements from "../components/CartElements"
import {Context} from "../Context"
import PropType from "prop-types"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const cartItemsElements = cartItems.map(item => (
        <CartElements key={item.id} item={item} />
    ))
    const totalCost = 5.50 * (cartItems.length + 1)
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "EUR"})

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {cartItems.length > 0 ?
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div> :
            <p>No items in cart.</p>}
        </main>
    )
}

Image.propType = {
    item: PropType.shape({
        url: PropType.string.isRequired
    })
}

export default Cart