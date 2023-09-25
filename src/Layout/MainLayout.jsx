import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[2000px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;