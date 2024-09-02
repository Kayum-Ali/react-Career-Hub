import './Job.css'
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


import PropTypes from 'prop-types'
const Job = ({ job }) => {

    const { logo,job_title,company_name,salary,location } = job
    return (
        <div>
            <div className='border rounded-lg p-8'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h3 className='font-bold text-xl mt-5'>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className='flex gap-5 mt-3'>
                       <button className="bn31" ><span className="bn31span">Remote</span></button>
                       <button className="bn31" ><span className="bn31span">Fuill Time</span></button>
                      
                    </div>
                   <div className='flex gap-5 mt-3'>
                      <p className='flex gap-2 items-center'><CiLocationOn></CiLocationOn> {location}</p>
                        <p className='flex gap-2 items-center'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine> Salary : {salary}</p>
                   </div>
                   <div className='mt-3'>
                     <button className="bn632-hover bn20">View Details</button>
                   </div>
                  
                  
                </div>

            </div>
          

        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;