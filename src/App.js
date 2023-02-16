import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navber from "./components/Navber";
import { useScrollSmooth } from "./hooks/SmoothScroll";
const App = () => {
  useScrollSmooth()
  return (
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App