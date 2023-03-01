import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addCandidateData } from "../redux/actions";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

export default function Jobcard() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const for storing form data
  const [candidate, setCandidate] = React.useState({
    join: "",
    experience: "",
    resume: "",
  });

  


 
  const data = useSelector((state) => state.jobReducers.data);
  const dispatch=useDispatch();

  const onFormSubmit=(e)=>{
		e.preventDefault()
		dispatch(addCandidateData(candidate))
    setIsModalOpen(false)
	   }

  


  // let for storing name and value
  let name, value, file, type;
  // handleInputs for storing data into productData object
  const handleInputs = (e) =>{
		
		name = e.target.name;
		value=e.target.value;
		
	setCandidate({...candidate,[name] : value}); 

	}
	const uploadResume = (e) => {
		file= e.target.files[0];
		name=e.target.name;

		setCandidate({...candidate,[name]:URL.createObjectURL(file)})
	}
	
  
  const viewMore = param => event => {
   
    // document.getElementById("body-"+param).classList.add("hidden");
    const check= document.getElementById("body-"+param).classList.contains("hidden");
    if(check){
      document.getElementById("body-"+param).classList.remove("hidden");
      document.getElementById("discription-"+param).classList.add("hidden");
    }
    else {
      document.getElementById("body-"+param).classList.add("hidden");
      document.getElementById("discription-"+param).classList.remove("hidden");
    }
   
  };
  
  return (
    <div className="pt-6 h-full pb-12 bg-gray-300">

      <div id="card" className="">
        <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">
          Recent Jobs
        </h2>
        {/* both container side by side starts */}

        {/* container for job card list */}

        {/* <!-- container for all cards --> */}

        {/* <div>
        onclick
        </div>
        <div>
         
          </div> */}
            {data?.map((elem) => (
        <div key={elem.id} >

          
          
              <div id={"body-"+(elem.id)}  className="container w-screen flex flex-col">
                {/* <!-- card --> */}
                <div
                  v-for="card in cards"
                  className="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
                >
                  {/* <!-- media --> */}

                  {/* <!-- content --> */}
                  <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
                    {/* data?.data?.map((elem) => ( */}

                    <h1
                      className="font-semibold text-2xl leading-tight md:col-span-5"
                      onClick={viewMore(elem.id)}
                    >
                      {elem.data.jname}
                    </h1>

                  <p>{elem.data.cname}</p>
                    <p>{elem.data.city}</p>
                    <br />
                    <div className=" flex items-center">

{ elem.data.fulltime &&

  <div className="bg-lime-200 text-lime-900 w-32 flex items-center">

<div>Full Time</div>

<BsFillBriefcaseFill className="ml-3" />
<AiOutlineCheck />
</div>
}

{ elem.data.parttime &&
<div className="bg-lime-200 text-lime-900 w-32 ml-2 flex items-center">

<div>Part-time</div>

< BsFillBriefcaseFill className="ml-3" />
<AiOutlineCheck />
</div> }

{elem.data.internship &&
<div className="bg-lime-200 text-lime-900 w-32 ml-2 flex items-center">

<div>Internship</div>

< BsFillBriefcaseFill className="ml-3" />
<AiOutlineCheck />
</div>}
    { elem.data.contract &&

      <div className="bg-lime-200 text-lime-900 w-28 ml-2 flex items-center">

    <div>Contract</div>

< BsFillBriefcaseFill className="ml-3" />
<AiOutlineCheck />
  </div>
}

</div>
                    <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center">
                      <FaMoneyBillWave />
                     RS {elem.data.salary}
                      <AiOutlineCheck />
                    </p>
                     { elem.data.uhiring === "Yes" &&

                       <div className="mt-3 w-32 h-6 bg-orange-200 flex items-center mb-5">
                        <BsStopwatch />{" "}
                      <p className="text-red-900 ">Urgently Hiring</p>
                      </div>
                    
                      }
                  </div>
                </div>
                {/* <!--/ card--> */}
              </div>
            
          


          <div id={"discription-"+(elem.id)} className="container w-100 w-1/3  flex flex-col w-full hidden">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
            >
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
                <BiArrowBack
                  onClick={viewMore(elem.id)}
                  className="text-4xl text-blue-700 mb-5"
                />
                <h1 className="font-semibold text-2xl leading-tight ">
                {elem.data.jname}
                </h1>
                <p className="">{elem.data.jname}</p>
                <p className="">{elem.data.city}</p>
                <br />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  &nbsp; Apply &nbsp;
                </button>
                {/* modal starts */}
                <div
                  className={`fixed z-10 inset-0 overflow-y-auto ${isModalOpen ? "" : "hidden"
                    }`}
                >
                  <div className="flex items-center justify-center min-h-screen">
                    <div
                      className="bg-white border border-gray-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-3/5 h-3/5"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                    >
                      <div className="px-4 py-5 sm:p-6">
                        <div className="mb-4">
                          <label
                            htmlFor="question1"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            How soon you can join?
                          </label>
                          <input
                            type="text"
                            name="join"
                            value={candidate.join}
                            onChange={handleInputs}
                            id="question1"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="question2"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Experience
                          </label>
                          <input
                            type="number"
                            id="question2"
                            name="experience"
                            value={candidate.experience}
                            onChange={handleInputs}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex 1 year"
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label className="block w-56">
                            <span className="mb-1">Upload resume</span>
                            <br />
                          </label>
                          <input
                            className="btn"
                            name="resume"
                            onChange={uploadResume}
                            type="file"
                            accept=".pdf , .doc , .docx"
                          ></input>
                        </div>
                        {/* Modal Buttons Here */}
                      </div>
                      <br />
                      {/* cancel/submit start */}
                      <div className="mb-2 mx-6 flex flex-col md:flex-row md:col-span-5 justify-between items-center">
                        <div className="mb-4 md:mb-0">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          >
                            &nbsp; Cancel &nbsp;
                          </button>
                        </div>
                        <div className="flex justify-end">
                          <button onClick={onFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Apply
                          </button>
                        </div>
                      </div>
                      {/* cancel/submit ends */}
                    </div>
                  </div>
                </div>

                {/* modal ends */}

                <hr className="my-6  border-gray-400 border-3"></hr>

                <p className="font-semibold text-2xl leading-right truncate">
                  {" "}
                  Job Details
                </p>
                <p className="font-semibold text-1xl leading-right mt-5">
                  Experience Required {elem.data.experience} Years
                </p>
                <p className="font-semibold text-1xl leading-right mt-5">
                  Job type
                </p>
                  <div className=" flex items-center">

                  { elem.data.fulltime &&

                    <div className="bg-lime-200 text-lime-900 w-32 flex items-center">

                  <div>Full Time</div>
                  
                  <BsFillBriefcaseFill className="ml-3" />
                  <AiOutlineCheck />
                 </div>
                }

                { elem.data.parttime &&
                 <div className="bg-lime-200 text-lime-900 w-32 ml-2 flex items-center">

                  <div>Part-time</div>

                  < BsFillBriefcaseFill className="ml-3" />
                  <AiOutlineCheck />
                  </div> }

                  {elem.data.internship &&
                  <div className="bg-lime-200 text-lime-900 w-32 ml-2 flex items-center">

                  <div>Internship</div>

                  < BsFillBriefcaseFill className="ml-3" />
                <AiOutlineCheck />
                  </div>}
                      { elem.data.contract &&

                        <div className="bg-lime-200 text-lime-900 w-28 ml-2 flex items-center">

                      <div>Contract</div>

                  < BsFillBriefcaseFill className="ml-3" />
                  <AiOutlineCheck />
                    </div>
                  }

                </div>
                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="font-semibold text-1xl leading-right mt-5">
                  Full job discription
                </p>
                <p className="my-3 font-semibold">About Company</p>
                <p className="text-center">
                 {elem.data.aboutcompany}
                </p>
                <p className="my-3 font-semibold">About Role</p>
                <p className="text-center">
                {elem.data.therole}
                </p>
                <p className="my-3 font-semibold">Skills required</p>
                <p className="">
                {elem.data.requirements}
                </p>
                <p className="mt-3 font-semibold"> Salary</p>
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center">
                  <FaMoneyBillWave />
                  Rs {elem.data.salary} Month
                  <AiOutlineCheck />
                </p>
                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-xl">Hiring Insights</p>
                <div className="flex items-center">
                  <BsFillBriefcaseFill />
                  <p className="ml-4">Hiring {elem.data.positions} Candidates for this role</p>
                </div>
                { elem.data.uhiring === "Yes" && (
                  <div className=" flex items-center">
                    <BsStopwatch /> <p className=" ml-4">Urgently Hiring</p>
                  </div>
                )}

                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-lg">Job activity</p>
                <div className="flex items-center">
                  <BsFillBriefcaseFill />
                  <p className="ml-4">Employer reviewed this job 2 days ago</p>
                </div>
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>

        </div>))}

        {/* container for full job details emds */}

        {/* Container for side by side forms end */}
      </div>
    </div>
  );
}


