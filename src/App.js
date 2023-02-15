import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navber from "./components/Navber";
const App = () => {
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