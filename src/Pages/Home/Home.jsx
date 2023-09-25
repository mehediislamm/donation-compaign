import { useLoaderData } from "react-router-dom";
import Donations from "../../Component/Donations/Donations";
import Banner from "../../Component/Navbar/Banner/Banner";


const Home = () => {
    const donations = useLoaderData();
    console.log(donations);
    return (
        <div>
            <Banner></Banner>
            <Donations donations ={donations}></Donations>
        </div>
    );
};

export default Home;