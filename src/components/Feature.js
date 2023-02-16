import { useRef } from "react";
import {useGsapLeftShutterFeatureUnveil,useGsapRightShutterFeatureUnveil} from '../hooks/Gsap'
const Feature = () => {

  const featureRef = useRef(null)
  const featureLeftRef = useRef(null)
  const  featureRightRef= useRef(null)

  useGsapLeftShutterFeatureUnveil( featureLeftRef,featureRef)
  useGsapRightShutterFeatureUnveil(featureRightRef,featureRef)
  return (
  <div className="featured wrapper" ref={featureRef}>
    <span className="feature-title">Featured</span>
    <div className="features">
      <div className="feature-left">
        <span className="f-i-title">90's Computer</span>
        <img src="https://media.istockphoto.com/id/1273665646/photo/cyberpunk-computer-room.jpg?s=612x612&w=0&k=20&c=jt5NLoH7gsqUaG54PhkIyPNaQ92_Ib2yfp8FzExiX7E=" alt="90's Computer" />
        <span className="feature-shutter-left"  ref={featureLeftRef}></span>
      </div>
      <div className="feature-right">
      <span className="f-i-title">90's car model</span>
        <img src="https://media.istockphoto.com/id/1319170281/photo/young-cheerful-girls-are-pushing-an-old-car-women-in-the-style-of-the-90s.jpg?s=612x612&w=0&k=20&c=ePTC0y1TV9BjdnTP1uo88bZlm98z-DL-ofjK9VcQJ3c=" alt="90's car model" />
        <span className="feature-shutter-right"  ref={featureRightRef}></span>
      </div>
    </div>
  </div>
  )
}

export default Feature