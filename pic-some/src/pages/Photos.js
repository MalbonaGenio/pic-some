import React, { useContext } from "react"
import { Context } from "../Context"
import {getClass} from "../utils/getClass"
import Image from "../components/Image"


function Photos() {
    const {allPhotos} = useContext(Context)
    const imgElement = allPhotos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)}/>
    ))
    return (
        <main className="photos">
            {imgElement}
        </main>
    )
}
export default Photos