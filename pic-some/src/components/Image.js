import React, { useState, useContext } from "react"
import PropType from "prop-types"
import { Context } from "../Context"

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

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

    return (
        //sets image-container but allows to pass things trough className too.
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {hovered && <i className="ri-add-circle-line cart"></i>}
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
