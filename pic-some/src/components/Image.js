import React, { useState } from "react"

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    return (
        //sets image-container but allows to pass things trough className too.
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image
