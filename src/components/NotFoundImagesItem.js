import { useRef } from "react";
import {useGsapNotFoundTitle,useGsapNotFounImage} from '../hooks/Gsap'
const NotFoundImagesItem = ({image}) => {
  const  notFoundTitleRef = useRef(null)
  const  notFoundCategoryRef = useRef(null)
  const  notFoundImageRef = useRef(null)

  useGsapNotFoundTitle(notFoundTitleRef,notFoundImageRef)
  useGsapNotFounImage(notFoundImageRef)

  return (
    <div className="not-found-image-items gallery-item">
      <h1 className="images-title" ref={notFoundTitleRef}> {image.title}</h1>
      <p className="gallery-item-category" ref={notFoundCategoryRef}>{image.category}</p>
      <div ref={notFoundImageRef} className="gallery-item-img" style={{backgroundImage: `url(${image.src})`}}></div>
    
    </div>
  )
}

export default NotFoundImagesItem