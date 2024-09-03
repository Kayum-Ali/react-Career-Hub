import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import propTypes from "prop-types";
const ShowApplied = ({job}) => {
    const {id,logo,job_title,company_name,location,salary,remote_or_onsite,job_type
    } = job;
    return (
        <div className="border p-8 mb-3">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
                 <div className="bg-[#F4F4F4] p-8 flex justify-center items-center rounded-lg col-span-2">
                     <img src={logo} alt="" />
                 </div>
                 
                 <div className="col-span-6"> 
                     <h3 className='font-bold text-xl mt-5'>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className='flex gap-5 mt-3'>
                       <button className="bn31" ><span className="bn31span">{remote_or_onsite}</span></button>
                       <button className="bn31" ><span className="bn31span">{job_type}</span></button>
                      
                    </div>
                   <div className='flex gap-5 mt-3'>
                      <p className='flex gap-2 items-center'><CiLocationOn></CiLocationOn> {location}</p>
                        <p className='flex gap-2 items-center'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine> Salary : {salary}</p>
                   </div>
                 
                 </div>

                 <div className='mt-3 col-span-2 flex justify-center items-center'>
                    <Link to={`/job/${id}`}>
                        <button className="bn632-hover bn20">View Details</button>

                    </Link>
                   </div>
            </div>
            
        </div>
    );
};

ShowApplied.propTypes = {
    job: propTypes.object.isRequired,
};
export default ShowApplied;