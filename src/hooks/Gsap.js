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
export const useGsapDownStagger = (lists, delay = 0) => {
  useEffect(() => {
    const elelment = lists.map((list) => list.current);

    gsap.fromTo(
      elelment,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 1,
        delay: delay,
      }
    );
  }, []);
};

// Image animation is here//
export const useGsapPhotoOrapping = (photos) => {
  useEffect(() => {
    const element = photos.map((photo) => photo.current);

    gsap.fromTo(
      element,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.4,
        delay: 2.2,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const elelment = arr.map((ar) => ar.current);
    gsap.fromTo(
      elelment,
      {
        y: 0,
      },
      {
        y: "-50%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
};
// feature is here//
export const useGsapLeftShutterFeatureUnveil = (item, trig) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapRightShutterFeatureUnveil = (item, trig) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
// Gallery Iamges are here//

export const useGsapGalleryImage = (item) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: elelment,
          start: "top center",
          end: "bottom top",
          toggleActions: "paly reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryTitle = (item, trig) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "left center",
          end: "bottom top",
          toggleActions: "paly reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryCategory = (item, trig) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        x: "-100vw",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "left center",
          end: "bottom top",
          toggleActions: "paly reverse play reverse",
        },
      }
    );
  }, []);
};
//  Footer is herte/
export const useGsapFooterAnimate = (item, trig) => {
  useEffect(() => {
    const elelment = item.current;

    gsap.fromTo(
      elelment,
      {
        y: "-100%",
      },
      {
        y: 0,
        duration: 1.5,
        ease:Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play",
        },
      }
    );
  }, []);
};

// not found images are here//
export const useGsapNotFoundTitle = (item,trig)=>{
 useEffect(()=>{
  const elelment = item.current;

  gsap.fromTo(elelment,{
    x:'40%'
  },{
    x: 0,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:trig.current,
      toggleActions:'play reverse play reverse'
    }
  })
 },[])
}

export const useGsapNotFounImage = (item)=>{
 useEffect(()=>{
  const element = item.current;


  gsap.fromTo(
    element,
    {
      x: 0,
    },
    {
      x: "30%",
      width: "100%",
      duration: 1,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom top",
        toggleActions: "paly reverse play reverse",
      },
    }
  );
 },[])
}
