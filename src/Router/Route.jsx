import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

import Statistics from "../Pages/Statistics/Statistics";
import DonationCard from "../Pages/DonationCard/DonationCard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



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
                element:<DonationCard></DonationCard>
            },
            {
                path:'/Statistics',
                element:<Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;