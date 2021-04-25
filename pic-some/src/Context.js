import React, { useEffect, useState } from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const dataUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return{
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevState => [...prevState, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevState => prevState.filter(item => item.id !== id))
    }
    console.log(cartItems)
    return(
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

