import React from "react";
import {BsFillBriefcaseFill} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
import {FaMoneyBillWave} from "react-icons/fa"
import {BsStopwatch} from "react-icons/bs"
export default function Idea(){
    const [urgentHiring,setUrgentHiring]=React.useState(true)
    const [viewMore, setViewMore]=React.useState(false)

    function toggle(){
      setViewMore(prevstate => !prevstate)
    }
    return(
        
        <div class="h-full pt-6 pb-12 bg-gray-300">  
       
        <div id="card" class="">
          <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Ideas</h2>
          {/* both container side by side starts */}
          <div className="flex">

           {/* container for job card list */}

          {/* <!-- container for all cards --> */}
          <div class="container w-100 w-1/3 flex flex-col">
            {/* <!-- card --> */}
            <div v-for="card in cards" onClick={toggle} class="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
              <div class="h-64 w-auto ">
                {/* <img class="inset-0 h-full w-full object-cover object-center" :src="card.img" /> */}
              </div>
              {/* <!-- content --> */}
              <div class="w-full  px-6 text-gray-800 flex flex-col mt-12">
                <h1 class="font-semibold text-2xl leading-tight md:col-span-5">Create Mixed posting website</h1>
                <p class="">
                  Company name
                </p>
                <p class="">
                  Location
                </p>
                <br/>
                <p class="bg-lime-200 text-lime-900 w-32 flex items-center">
                 <div>
                    Full Time 
                    </div> 
                    <BsFillBriefcaseFill className="ml-3"/>
                    <AiOutlineCheck/>
                </p>
                <p class="mt-1 h-9  bg-lime-200 text-lime-900 w-60 flex items-center">
                 <FaMoneyBillWave/> 
                   Rs-15000 -Rs-260000 Month
                    <AiOutlineCheck/>
                </p>
                {
                  urgentHiring &&
                  <div className="mt-3 w-32 h-6 bg-orange-200 flex items-center mb-5">
                    <BsStopwatch/> <p className="text-red-900 ">Urgently Hiring</p>
                </div>
                }
                
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
          {/* <!--/ flex--> */}
          {/* Containerfor job card list ends */}

                {/* container for full job details starts */}
                { viewMore &&

                  <div class="container w-100 w-1/3  flex flex-col w-full">
            {/* <!-- card --> */}
            <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
              <div class="h-64 w-auto ">
                {/* <img class="inset-0 h-full w-full object-cover object-center" :src="card.img" /> */}
              </div>
              {/* <!-- content --> */}
              <div class="w-full  px-6 text-gray-800 flex flex-col mt-12">
                <h1 class="font-semibold text-2xl leading-tight ">Create Mixed posting website</h1>
                <p class="">
                  Company name
                </p>
                <p class="">
                  Location
                </p>
                <br/>
                <button   className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    &nbsp;   Apply &nbsp; 
		            </button>

                <hr class="my-6  border-gray-400 border-3"></hr>

                <p className="font-semibold text-2xl leading-right truncate"> Idea Details</p>
               
                <hr class="my-3  border-gray-400 border-3"></hr>
                <p className="font-semibold text-1xl leading-right mt-5">Full Idea discription</p>
                <p className="my-3 font-semibold">About Company</p>
                <p className="text-center">We are ‘The Kalculators’ – a firm that comprises of specialised, certified, professional accountants on a mission to deliver an extensive range of accountancy services.

With over 7 years’ experience in providing accounting, taxation and advisory services to a diverse clientele, we are committed to the highest degree of service excellence and the utmost integrity at all times.

We now expanding our accounting service by developing a SAAS platform, that will be used by accountants all over Australia.</p>
<p className="my-3 font-semibold">About Role</p>
<p className="text-center">We are looking for a Full Stack Developer with expertise in REACT js and NODE Js to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to deployment.

As a Full Stack Developer, you should be comfortable around both front-end and back-end coding languages, development frameworks and third-party libraries. You should also be a team player with a knack for visual design and utility. You will be responsible for developing an accounting SAAS platform.

If you’re also familiar with Agile methodologies, we’d like to meet you.

You are required to work from our based in lahore - Firdos market.
Job timing - 3:30am to 11:30am
Monday to Friday</p>
<p className="my-3 font-semibold">Skills required</p>
<p className="">- 3+ years of experience working in React JS and able to demonstrate strong JavaScript knowledge.
- 3+ years of experience working with NodeJS.
- 3+ years of experience working with PostgreSQL.
- Experience with CI and CD environments and platforms (Azure and AWS).
- Experience using test-driven development practices.
- Ability to efficiently manage and build large, complex web applications
- Perform hands-on software development, including writing code and unit tests, doing proof
of concepts, conducting code reviews, and testing in ongoing sprints.
- Drive automation and ensure automated test scripts are completed for new features.
- Work collaboratively with a tight-knit product development team
- Develop and manage server-side components
- Design and deploy high-performance applications
- Ability to use Asynchronous Programming to improve productivity
- In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.
- Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.</p>
                  <p className="mt-3 font-semibold"> Budget</p>
                <p class="mt-1 h-9  bg-lime-200 text-lime-900 w-60 flex items-center"> 
                 <FaMoneyBillWave/> 
                   Rs-15000 -Rs-260000 Month
                    <AiOutlineCheck/>
                </p>
               
               

<hr class="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-lg">Job activity</p>
                <div className="flex items-center">

                <BsFillBriefcaseFill/>
                <p className="ml-4">user revied this job 2 days ago</p>
                </div>
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
              }
                {/* container for full job details emds */}

          </div>

          {/* Container for side by side forms end */}
        </div>

    
        
      </div>
    )
}
