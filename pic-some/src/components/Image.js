import React from "react"

function Image({img, className}) {
    return (
        //sets image-container but allows to pass things trough className too.
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image
