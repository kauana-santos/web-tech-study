import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"


export default function Router() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>

    </BrowserRouter>
  )
  
}
