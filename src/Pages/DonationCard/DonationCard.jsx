/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const DonationCard = ({ donation }) => {
    const { id, img, title, category, Card_bg_color, category_bg_color, title_color } = donation || {}

    return (
        <div>
           <Link to={`/donations/${id}`}>
           <div className=" relative flex w-72 h-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={img}
                        alt="ui/ux review check"
                    />
                </div>
                <div style={{ backgroundColor: `${Card_bg_color}` }} className="p-6 ">
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
                    <h4 style={{
                       
                        color: `${title_color}`
                    }} className=" pt-5 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>

                </div>

            </div>
           
           </Link>
        </div>
    );
};

export default DonationCard;