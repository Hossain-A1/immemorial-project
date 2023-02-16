import { useRef } from "react";
import { useGsapShutterUnvell,useGsapPhotoOrapping, useGsapPhotoLevitate } from "../hooks/Gsap";
const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnvell(shutter1, 0, heroSectionRef);
  useGsapShutterUnvell(shutter2, 0.2, heroSectionRef);
  // photos ref here//
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr  = [photo1Ref,photo2Ref,photo3Ref,photo4Ref,photo5Ref]

  useGsapPhotoOrapping(photosArr)
  useGsapPhotoLevitate(photosArr,heroSectionRef)
  return (
    <section className="hero wrapper" ref={heroSectionRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos ">
        <div
          ref={photo1Ref}
          className="photo ph-1"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/940429408/photo/old-grandmother-with-grandchildren-in-1952-tuscany-italy.jpg?s=612x612&w=0&k=20&c=emhdnp2hn7GOqix6sMStMNHGZeXz8ItL0nZ_CXbRBLk=")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo ph-2"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1294986053/photo/young-mother-with-daugter-and-son-on-a-roadtrip-in-germany.jpg?s=612x612&w=0&k=20&c=4Kt3uq7kotlLYRxI2i4l2LjfcQKTBA3RVEUwmmH9CN4=")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo ph-3"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/940926504/photo/two-italian-women-in-swimsuit-in-1934.jpg?s=612x612&w=0&k=20&c=PYc2KE0AUCx1JnG1g-M_WzpLUZPADwJFVlDRe3ns9Uw=")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo ph-4"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/117150029/photo/deep-in-memories.jpg?s=612x612&w=0&k=20&c=Mqklkpz53YoMf0zv3XveXV46lx-Z3b1oVfDSRvpLOGs=")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo ph-5"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/938154432/photo/memories.jpg?s=612x612&w=0&k=20&c=cXoepmddmkaey7n1pusaCN3cmqTNaOq7FAbvWE7BZu8=")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
