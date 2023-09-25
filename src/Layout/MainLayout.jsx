import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1400px] mx-auto ">
            <Navbar></Navbar>
            <div className="py-10 ml-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;