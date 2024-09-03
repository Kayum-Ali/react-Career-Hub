
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const Jobs = () => {
    const bgImg = {
        backgroundImage: 'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723464811/1-new_xuoqca.png")', 
        backgroundSize: 'cover',
        borderRadius: '10px',
        overflow: 'hidden',
    }
    return (
        <div className="bg-[#F8F9FA] py-20">
            <div className='container mx-auto px-5 flex-grow'>
                  <div>
                    <h1 className="text-3xl font-semibold text-center py-10">Learn what Nimusoft products can do for you</h1>
                    <p className="text-center">Explore how Nimu HRM, Nimu Attendance, and Nimu Inventory streamline and enhance your business operations</p>
                  </div>

                  {/* nimusogt product card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {/* nimu HRM */}
                    <div style={bgImg} className="h-[500px] shadow-2xl bg-white relative ">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="Nimu HRM" />
                            <h2 className="text-2xl font-bold">Nimu HRM</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Nimu HRM dashboard centralizes HR activities, offering real-time data and empowering data-driven workforce management.</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>

                    {/* Nimu Attendence */}
                   
                    <div style={{backgroundImage:'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723467095/3-new_ig9cph.png")'}} className="h-[500px] shadow-2xl bg-white relative bg-cover rounded-[10px] overflow-hidden">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt=" Nimu Attendance" />
                            <h2 className="text-2xl font-bold">Nimu Attendance</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Transform attendance management with Nimu Attendance, enhancing monitoring, analysis, and efficiency for medium to large businesses</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>
                    {/* Nimu Inventory */}
                    <div style={{backgroundImage:'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723466812/2-new_x1kznc.png")'}} className="h-[500px] shadow-2xl bg-white relative bg-cover rounded-[10px] overflow-hidden">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="Nimu Inventory" />
                            <h2 className="text-2xl font-bold">Nimu Inventory</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Nimu Inventory software streamlines financial transactions, integrates with business systems, and optimizes inventory management for all sizes</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>
                    {/* Nimu CRM*/}
                    <div style={{backgroundImage:'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723467662/5-new_rwohsk.png")'}} className="h-[500px] shadow-2xl bg-white relative bg-cover rounded-[10px] overflow-hidden">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="Nimu CRM" />
                            <h2 className="text-2xl font-bold">Nimu Inventory</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Boost customer relationships and sales with Nimu CRM, offering comprehensive data and automation facility</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>
                     {/* Nimu Education*/}
                     <div style={{backgroundImage:'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723467891/6-new_dt9xqr.png")'}} className="h-[500px] shadow-2xl bg-white relative bg-cover rounded-[10px] overflow-hidden">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="Nimu Education" />
                            <h2 className="text-2xl font-bold">Nimu Education</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Revolutionize learning with Nimu Education, providing advanced tools for efficient educational management system</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>
                     {/* Nimu POS*/}
                     <div style={{backgroundImage:'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723468003/4-new_g12ugt.png")'}} className="h-[500px] shadow-2xl bg-white relative bg-cover rounded-[10px] overflow-hidden">
                        <div className="text-center py-5">
                            <img className="w-[80px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="Nimu POS" />
                            <h2 className="text-2xl font-bold">Nimu POS</h2>
                            <p className="absolute top-1/2 text-xl pt-5 px-5">Streamline sales and inventory management with Nimu POS, enhancing efficiency and customer experience</p>
                        </div>
                        {/* link */}
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         <Link  className="flex items-center gap-2 text-white linkHover">Learn More <GoArrowRight    className=" rightArrow font-bold text-xl"></GoArrowRight></Link>

                      </div>
                    </div>

                  </div>
            </div>
            
        </div>
    );
};

export default Jobs;