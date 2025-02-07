import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home(){
    return(
        <>
        <div className="mb-30">
        <Navbar clasName="mb-20"/>
        </div>
        <div className="mt-16">
        <Outlet />
        </div>
        <Footer />
        </>
    )
}