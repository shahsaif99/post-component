import React from "react";
import {BsFillBriefcaseFill} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
import {FaMoneyBillWave} from "react-icons/fa"
import {BsStopwatch} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import { useSelector } from "react-redux";




export default function Idea(){
    
  const data = useSelector((state) => state.ideaReducers.data);


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
  
    return(
        
        <div className="h-full pt-6 pb-12 bg-gray-300">  
       
        <div id="card" className="">
          <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Ideas</h2>
          {/* both container side by side starts */}
          

           {/* container for job card list */}
           {data?.map((elem) => (
          <div key={elem.id}>
          {/* <!-- container for all cards --> */}
          <div id={"body-"+(elem.id)}  className="container w-100 w-1/3 flex flex-col">
            {/* <!-- card --> */}
            <div v-for="card in cards"  className="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
              <div className="h-64 w-auto ">
                {/* <img className="inset-0 h-full w-full object-cover object-center" :src="card.img" /> */}
              </div>
              {/* <!-- content --> */}
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
              
                <h1  onClick={viewMore(elem.id)} className="font-semibold text-2xl leading-tight md:col-span-5">{elem.data.idea}</h1>
                <p className="">
                  Company name
                </p>
             
                <br/>
               
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center">
                 <FaMoneyBillWave/> 
                {elem.data.budget}
                    <AiOutlineCheck/>
                </p>
                
                
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
          {/* <!--/ flex--> */}
          {/* Containerfor job card list ends */}

                {/* container for full job details starts */}
               

                  <div id={"discription-"+(elem.id)}  className="container w-100 w-1/3  flex flex-col w-full hidden">
            {/* <!-- card --> */}
            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
              <div className="h-64 w-auto ">
                {/* <img className="inset-0 h-full w-full object-cover object-center" :src="card.img" /> */}
              </div>
              {/* <!-- content --> */}
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
              <BiArrowBack
                  onClick={viewMore(elem.id)}
                  className="text-4xl text-blue-700 mb-5"
                />
                <h1 className="font-semibold text-2xl leading-tight ">Create Mixed posting website</h1>
                <p className="">
                  Company name
                </p>
                <p className="">
                  Location
                </p>
                <br/>
                <button   className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    &nbsp;   Apply &nbsp; 
		            </button>

                <hr className="my-6  border-gray-400 border-3"></hr>

                <p className="font-semibold text-2xl leading-right truncate"> Idea Details</p>
               
                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="font-semibold text-1xl leading-right mt-5">Full Idea discription</p>
                <p className="my-3 font-semibold">About Author</p>
                <p className="text-center">{elem.data.your_discription}</p>
                <p className="my-3 font-semibold">About Idea</p>
                <p className="text-center">{elem.data.about_idea}</p>
<p className="my-3 font-semibold">Skills required</p>
<p className="">{elem.data.skills}</p>
                  <p className="mt-3 font-semibold"> Budget</p>
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-fit flex items-center"> 
                 <FaMoneyBillWave/> 
                   {elem.data.budget}
                    <AiOutlineCheck/>
                </p>
               
               

<hr className="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-lg">Job activity</p>
                <div className="flex items-center">

                <BsFillBriefcaseFill/>
                <p className="ml-4">user revied this job 2 days ago</p>
                </div>
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
              
                {/* container for full job details emds */}

          </div>))}

          {/* Container for side by side forms end */}
        </div>

    
        
      </div>
    )
}
