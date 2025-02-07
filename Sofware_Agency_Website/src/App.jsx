import { BrowserRouter, Routes ,Route} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Pricing from "./Components/Pricing/Pricing";
import Service from "./Components/Services/Services";
import Home from "./Components/Home/Home";
import Herosection from "./Components/Herosection/Herosection";
import SignIn from "./Components/Contact/Sign-In/SignIn";
import Register from "./Components/Register/Register";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/" element={<Herosection/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/register" element={<Register/>} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}