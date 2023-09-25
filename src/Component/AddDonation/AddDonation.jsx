/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const AddDonation = ({donation}) => {
    const { id, price, img, description, title, category,
        Card_bg_color, category_bg_color, title_color } = donation || {}
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  <button style={{
                        backgroundColor: `${category_bg_color}`,
                        color: `${title_color}`
                    }}

                        className="select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        {category}
                    </button>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p style={{
                       
                        color: `${title_color}`
                    }} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    ${price}
    </p>
       <Link to={"/"}  className="inline-block" >
      
      <button  style={{
                        backgroundColor: `${title_color}`,
                        
                    }} className="btn text-white">View Details</button>
   
       
       </Link>
  </div>
</div>
        </div>
    );
};

export default AddDonation;