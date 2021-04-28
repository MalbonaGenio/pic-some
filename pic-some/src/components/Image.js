import React, { useState, useContext } from "react"
import PropType from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function Image({img, className}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i 
            className="ri-heart-fill favorite" 
            onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i 
            className="ri-heart-line favorite" 
            onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id)
        if(isInCart){
            return <i 
            className="ri-shopping-cart-fill cart"
            onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i 
            className="ri-add-circle-line cart"
            onClick={() => addToCart(img)}></i>
        }
    }

    return (
        //sets image-container but allows to pass things trough className too.
        <div 
            className={`${className} image-container`} 
            ref={ref}>
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}
Image.propType = {
    className: PropType.string,
    img: PropType.shape({
        id: PropType.string.isRequired,
        url: PropType.string.isRequired,
        isFavorite: PropType.bool
    })
}
export default Image
