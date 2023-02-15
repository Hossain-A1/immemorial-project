import { useRef } from "react";
import { useGsapShutterUnvell } from "../hooks/Gsap";

const HeroSection = () => {
  const heroSectionRef = useRef(null)
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnvell(shutter1,0,heroSectionRef);
  useGsapShutterUnvell(shutter2, 0.2, heroSectionRef);

  return (
    <section className="hero wrapper" ref={heroSectionRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
     
    </section>
  );
};

export default HeroSection;
