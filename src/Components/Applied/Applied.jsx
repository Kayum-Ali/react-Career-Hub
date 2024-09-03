import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";
import { FaAngleDown } from "react-icons/fa6";
import ShowApplied from "../ShowApplied/ShowApplied";


const Applied = () => {
  const data = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (data.length > 0) {
        const jobApplied = []
        for(const id of storedJobIds){
           if(Array.isArray(data)){
            const jobDetail = data?.find(item => item.id === id);
            if(jobDetail){
                jobApplied.push(jobDetail);
            }
           }
 
        }
        setAppliedJobs(jobApplied);
        setDisplayJobs(jobApplied)
   
    }
  }, [data]);


  const handleFilterJobs = filter =>{

    if(filter === 'All'){
        setDisplayJobs(appliedJobs)
    }
    else if( filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    }
  }

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
              <li onClick={()=> handleFilterJobs('All')}><a>All</a></li>
              <li onClick={()=> handleFilterJobs('remote')}><a>Remote</a></li>
              <li onClick={()=> handleFilterJobs('onsite')}><a>onsite</a></li>
             
            </ul>
            </details>
         </div>

         <div>
             {
                displayJobs.map(job => <ShowApplied key={job.id} job={job}></ShowApplied>)
             }
         </div>


      </div>
    </div>
  );
};

export default Applied;
