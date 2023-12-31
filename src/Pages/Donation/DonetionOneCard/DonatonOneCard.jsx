/* eslint-disable no-unused-vars */

import swal from "sweetalert";


const DonatonOneCard = ({ donation }) => {
    const { id, price, img, description, title, category,
        Card_bg_color, category_bg_color, title_color } = donation || {}

    const handleAddToDonate = () => {
        const addDonateArray = [];
        const donateItem = JSON.parse(localStorage.getItem('donate'))

        if (!donateItem) {
            addDonateArray.push(donation)
            localStorage.setItem('donate', JSON.stringify(addDonateArray))
            swal("Good job!", "Donate add successfull!", "success");
        }
        else {
            const isExits = donateItem.find(donation => donation.id == id)

            if (!isExits) {
                addDonateArray.push(...donateItem, donation)
                localStorage.setItem('donate', JSON.stringify(addDonateArray))
                swal("Good job!", "Donate add successfull!", "success");
            }
            else{
                swal("error!", "Already add donate!", "error");
            }


        }

        // localStorage.setItem('text',JSON.stringify([{name:'hasib'},{name:'ph'}]))
    }

    return (
        <div>
            <div className="relative  h-[72vh]  w-[72vh] flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" relative    m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="   w-full "
                        src={img}
                        alt="ui/ux review check"
                    />
                 
                    
             
              
              <div className="   absolute bottom-0 left-0 ml-2 mb-5">
                    
                    < button   style={{
                         backgroundColor: `${title_color}`
                         
                     }}
                         onClick={handleAddToDonate}
                                 className="btn">Donate ${price}</button>
                    </div>
              
               </div>
               <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
                 
                </div>
              

            </div>
       
    );
};

export default DonatonOneCard;