

const Banner = () => {
    return (
        <div className="bg-[#F9F9FF]">
            <div className="flex py-12 flex-col lg:flex-row items-center container mx-auto">
                  <div className="space-y-3 flex-1 text-center lg:text-start">
                    <h2 className="lg:text-6xl text-4xl  font-bold">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent ">Dream Job</span></h2>
                    <p className="text-xl">Explore thousands of job opportunities with all the <br className="hidden lg:block"/> information you need. Its your future. Come find it. Manage all <br  className="hidden lg:block"/> your job application from start to finish.</p>
                    <button className="btn btn-success bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl">Get Started</button>
                  </div>
                  <div className="flex-1">
                      <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725282044/user_brmhnt.png" alt="" />
                  </div>
            </div>
           
        </div>
    );
};

export default Banner;