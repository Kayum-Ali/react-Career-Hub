import { useLoaderData, useParams } from "react-router-dom";
import {
  RiMoneyDollarCircleLine,
  RiTextSnippet,
  RiInboxFill,
} from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/LocalStorage";


const JobDetails = () => {
 
  const data = useLoaderData();
  const { jobId } = useParams();
  const details = data.find((params) => params.id === +jobId);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information
  } = details;

  const notify = () => {
    saveJobApplication(+jobId)
    toast.success("Successfuly appalied the job!");

  } 

  return (
    <div>
      <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725326982/bg2_j9nznc.png')] bg-right-top bg-no-repeat pt-10  bg-[#F9F9FF]">
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725326578/bg1_drx3nm.png')] h-[30vh]  bg-no-repeat bg-left-bottom">
          <h2 className="text-center font-bold text-2xl mt-10">job details</h2>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-6 container gap-3 mx-auto py-12">
        <div className="col-span-4 px-5 lg:px-0">
          <h2 className="text-xl font-bold">
            Job Description :{" "}
            <span className="opacity-80 font-normal text-xl">
              {job_description}
            </span>
          </h2>
          <h2 className="text-xl font-bold">
            Job Responsibility :{" "}
            <span className="opacity-80 font-normal text-xl">
              {job_responsibility}
            </span>
          </h2>

          <h2 className="text-xl font-bold">
            Educational Requirements : <br /> <br />{" "}
            <span className="opacity-80 font-normal text-xl">
              {educational_requirements}
            </span>
          </h2>

          <h2 className="text-xl font-bold">
            Experiences : <br /> <br />{" "}
            <span className="opacity-80 font-normal text-xl">
              {experiences}
            </span>
          </h2>
        </div>


        <div className="col-span-2 ">
          <div className="bg-[#F4F2FF] rounded-xl p-5">
                <h2 className="font-bold text-2xl mb-5">Job Details</h2>
                <hr />
                <div className="flex items-center gap-2 font-medium text-xl mt-2">
                <RiMoneyDollarCircleLine className="text-blue-400"></RiMoneyDollarCircleLine>{" "}
                Salary :{" "}
                <span className="font-normal opacity-80">
                    {salary} (per month)
                </span>
                </div>
                <div className="flex items-center gap-2 font-medium text-xl mt-2">
                <RiTextSnippet className="text-blue-400"></RiTextSnippet>
                Job title :{" "}
                <span className="font-normal opacity-80">{job_title}</span>
                </div>
                <h2 className=" font-bold text-2xl my-4">Contact Information</h2>
                <hr />
                <div className="flex items-center gap-2 font-medium text-xl mt-2">
                <MdAddCall className="text-blue-400"></MdAddCall>
                Phone :{" "}
                <span className="font-normal opacity-80">
                    {contact_information.phone}
                </span>
                </div>
                <div className="flex items-center gap-2 font-medium text-xl mt-2">
                <RiInboxFill className="text-blue-400"></RiInboxFill>
                Email :{" "}
                <span className="font-normal opacity-80">
                    {contact_information.email}
                </span>
                </div>
                <div className="flex items-center justify-center gap-2 font-medium text-xl mt-2">
                <div>
                    <CiLocationOn className="text-blue-400 text-2xl"></CiLocationOn>
                </div>
                <h2>
                    {" "}
                    Location :{" "}
                    <span className="font-normal opacity-80">
                    {contact_information.address}
                    </span>
                </h2>
                </div>
          </div>
          <button onClick={notify} className="bg-gradient-to-r from-[#828CFE] to-[#9379FF]  text-white font-bold py-2.5 w-full rounded-lg mt-3">Apply Now </button>
        </div>
        
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
