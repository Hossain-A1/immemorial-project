import About from "./About";
import Feature from "./Feature";
import Footer from "./Footer";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
     <About/>
     <Gallery/>
     <Footer/>
    </div>
  );
};

export default Home;
