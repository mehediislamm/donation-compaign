


const Banner = () => {
    return (
        <div >

<div className="card bg-base-100 shadow-xl image-full">
  <figure><img src="/public/Banner.jpg" alt="bannerr" /></figure>
  <div className="card-body">
  <div className="pt-24" >
                <h1 className="text-center text-3xl font-bold ">I Grow By Helping People In Need</h1>
                <div className="text-center">
                <input type="text" placeholder="Type here"
                 className="input text-black input-bordered input-md w-full max-w-xs" />
                 <button className="btn bg-[#FF444A] h-4">Search</button>
                 
                </div>
            </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Banner;