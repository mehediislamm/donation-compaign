import { useEffect, useState } from "react";
import AddDonation from "../../Component/AddDonation/AddDonation";





const Donationss = () => {
    const [donationss, setDonationss] = useState([])

    const [nofound, setNofound] = useState('')
    const [isShow, setIsShow] =useState(false)

    useEffect(()=>{
      const donateItem = JSON.parse(localStorage.getItem('donate'));
     if(donateItem){
        setDonationss(donateItem)
     }
     else{
        setNofound('No data found')
     }
    },[]);
    console.log(donationss);
    const handleRemove =()=>{
      localStorage.clear()
      setDonationss([])
      setNofound('No data found')

    }


    return (
     
        <div>
          {
            nofound?<p className="h-[70vh] flex justify-center items-center">{nofound}</p>:<div>
              <div className="flex justify-center items-center">
              {
                donationss.length>4 && donationss.length>0 && <button  onClick={handleRemove}
                className="btn bg-green-400 mx-auto">Remove All Donation</button>
              }
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                
              {
               isShow ?   donationss.map((donation => 
               <AddDonation key={donation.id} donation={donation}></AddDonation> )):
               donationss.slice(0,4).map(donation => <AddDonation key={donation.id} donation={donation}></AddDonation> )
              }
              </div>
             <div className="flex justify-center items-center">
                {donationss.length > 4 &&  <button onClick={()=>setIsShow(!isShow)}
                className="btn bg-[#009444] text-white mx-auto"
                
                >See All</button>}
             </div>

            </div>
          }
        
        </div>
    );
};

export default Donationss;