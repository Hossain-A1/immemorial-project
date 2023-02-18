import { useRef } from "react";
import {useGsapFooterAnimate} from '../hooks/Gsap'
const Footer = () => {

  const footerHeadline = useRef(null)
  const footerRef = useRef(null)

  useGsapFooterAnimate(footerHeadline,footerRef)
  return (
    <footer className="footer wrapper" ref={footerRef}>
      <h1 className="bonjour" ref={footerHeadline}>Bonjour</h1>
      <p className="footer-text">&copy;{new Date().getFullYear()} Immemorial.Create by yours truly </p>
    </footer>
  )
}

export default Footer