import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnvell = (item, delay = 0, trig) => {
  useEffect(() => {
    const element = item.current;

    gsap.fromTo(
      element,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse paly reverse",
        },
      }
    );
  }, []);
};
// Links animation  is here//
 export const useGsapDownStagger = (lists ,delay=0)=>{
  useEffect(()=>{
  const elelment =  lists.map((list)=> list.current)

  gsap.fromTo(elelment ,{
    y: '-100%',
    opacity:0
  },{
    y:0,
    opacity:1,
    duration:0.5,
    stagger: 1,
    delay:delay
  })

  },[])
}