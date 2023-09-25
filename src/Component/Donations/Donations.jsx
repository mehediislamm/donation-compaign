import DonationCard from "../../Pages/DonationCard/DonationCard";



const Donations = ({donations}) => {
    console.log(donations);
    return (
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24">
           
                {
                    donations?.map(donation=> 
                    <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            
        </div>
    );
};

export default Donations; 