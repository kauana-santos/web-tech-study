import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Faq from "./pages/Faq"

export default function Router() {
  return (

    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/faq" element={<Faq/>}/>
        </Routes>

    </BrowserRouter>
  )
  
}
