import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";
import { FaAngleDown } from "react-icons/fa6";
import ShowApplied from "../ShowApplied/ShowApplied";


const Applied = () => {
  const data = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  const [display, setdisplay] = useState([]);
  const handlefilterjob = filter =>{
    if(filter === 'all'){
      setdisplay(jobApplied)
    }
    else if(filter === 'remote'){
      setdisplay(jobApplied.filter(job => job.remote_or_onsite === 'Remote'))
   }
   else if(filter === 'onsite'){
     setdisplay(jobApplied.filter(job => job.remote_or_onsite === 'Onsite'))
   }}
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (data.length > 0) {
      const appliedJobs = data.filter((job) => storedJobIds.includes(job.id));
      setJobApplied(appliedJobs);
      setdisplay(appliedJobs); // you can use this data for your purpose
      console.log(appliedJobs); // you can use this data for your purpose
    }
  }, []);

  return (
    <div>
      <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725326982/bg2_j9nznc.png')] bg-right-top bg-no-repeat pt-10  bg-[#F9F9FF]">
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725326578/bg1_drx3nm.png')] h-[30vh] bg-left-bottom  bg-no-repeat ">
          <h2 className="text-center font-bold text-2xl mt-10">Applied Jobs</h2>
        </div>
      </div>

      <div className="container mx-auto">
          <div className="flex justify-end py-12 px-5">
            <details className="dropdown">
            <summary className="btn m-1">Filter By <FaAngleDown></FaAngleDown></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a onClick={()=> handlefilterjob('all')}>All</a></li>
              <li><a  onClick={()=> handlefilterjob('remote')}>Remote</a></li>
              <li><a  onClick={()=> handlefilterjob('onsite')}>onsite</a></li>
             
            </ul>
            </details>
         </div>

         <div>
             {
               display.map(job => <ShowApplied key={job.id} job={job}></ShowApplied>)
             }
         </div>


      </div>
    </div>
  );
};

export default Applied;
