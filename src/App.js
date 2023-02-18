import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Feature from "./components/Feature";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navber from "./components/Navber";
import NotFound from "./components/NotFound";
import { useScrollSmooth } from "./hooks/SmoothScroll";
const App = () => {
  useScrollSmooth()
  return (
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/featured" element={<Feature/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog requiredFullHeight={true}/>}/>
        <Route path="*" element={<NotFound  requiredFullHeight={true}/>}/>
      </Routes>
    </div>
  )
}

export default App