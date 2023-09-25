import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

import Statistics from "../Pages/Statistics/Statistics";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Donationss from "../Pages/Donation/Donationss";




const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/Data.json')
            },
            {
                path:'/Donation',
                element:<Donationss></Donationss>
            },
            {
                path:'/Statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donations/:id',
                element:<Donation></Donation>,
                loader:()=>fetch('/Data.json')
            }
        ]
    }
])

export default myCreatedRoute;