import React, { useState, useContext } from "react"
import { Context } from "../Context"

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    return (
        //sets image-container but allows to pass things trough className too.
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
            {hovered && <i 
                className="ri-heart-line favorite" 
                onClick={() => toggleFavorite(img.id)}></i>
            }
            {hovered && <i className="ri-add-circle-line cart"></i>}
        </div>
    )
}

export default Image
