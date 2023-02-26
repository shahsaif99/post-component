import React,{useState} from "react";
import {BsFillBriefcaseFill} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
import {FaMoneyBillWave} from "react-icons/fa"
import {BsStopwatch} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
export default function Jobcard(){
    const [urgentHiring,setUrgentHiring]=useState(true)
    const [viewMore, setViewMore]=useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const for storing form data
	const [candidate,setCandidate]=React.useState({join:"",experience:"",resume:""})
	// let for storing name and value
	let name, value,file,type;
	// handleInputs for storing data into productData object
	const handleInputs = (e) =>{
		name = e.target.name;
		value=e.target.value;
		file=e.target.files[0];
		type=e.target.type
	setCandidate({...candidate,[name]:type === "file" ? URL.createObjectURL(file) : value}); 

	}
	


    function toggle(){
      setViewMore(prevstate => !prevstate)
    }
    return(
      
      <div className="pt-6 h-full pb-12 bg-gray-300">  
        
        <div id="card" className="">
          <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Jobs</h2>
          {/* both container side by side starts */}
         

           {/* container for job card list */}
        
          {/* <!-- container for all cards --> */}
      { !viewMore &&
          <div className="container w-screen flex flex-col">
            {/* <!-- card --> */}
            <div v-for="card in cards"  className="flex flex-col md:flex-row overflow-hidden
                                              bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
             
              {/* <!-- content --> */}
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
                <h1 className="font-semibold text-2xl leading-tight md:col-span-5" onClick={toggle}>Web Developer HTMl CSS Javascrisdadsdasdadsdad sdasda asdad  asda sada pts</h1>
                <p className="">
                  Company name
                </p>
                <p className="">
                  Location
                </p>
                <br/>
                <p className="bg-lime-200 text-lime-900 w-32 flex items-center">
                 <div>
                    Full Time 
                    </div> 
                    <BsFillBriefcaseFill className="ml-3"/>
                    <AiOutlineCheck/>
                </p>
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-60 flex items-center">
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

          }
          {/* <!--/ flex--> */}
          {/* Containerfor job card list ends */}

                {/* container for full job details starts */}
                { viewMore &&

                  <div className="container w-100 w-1/3  flex flex-col w-full">
            {/* <!-- card --> */}
            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              {/* <!-- media --> */}
              
              {/* <!-- content --> */}
              <div className="w-full  px-6 text-gray-800 flex flex-col mt-12">
                  <BiArrowBack onClick={toggle} className="text-4xl text-blue-700 mb-5"/>
                <h1 className="font-semibold text-2xl leading-tight ">Web Developer Required</h1>
                <p className="">
                  Company name
                </p>
                <p className="">
                  Location
                </p>
                <br/>
                <button  onClick={() => setIsModalOpen(true)} className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    &nbsp;   Apply &nbsp; 
		            </button>
                {/* modal starts */}
                <div className={`fixed z-10 inset-0 overflow-y-auto ${isModalOpen ? "" : "hidden"}`}>
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white border border-gray-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-3/5 h-3/5" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-4">
          <label htmlFor="question1" className="block text-gray-700 font-bold mb-2">
            How soon you can join?
          </label>
          <input type="text" name="join" value={candidate.join} onChange={handleInputs} id="question1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>
        <div className="mb-4">
          <label htmlFor="question2" className="block text-gray-700 font-bold mb-2">
            Experience
          </label>
          <input type="number" id="question2" name="experience" value={candidate.experience} onChange={handleInputs} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex 1 year" />
        </div>
        <div className="md:col-span-5">

<label className="block w-56">
            <span className="mb-1">Upload resume</span><br/>
        </label>
      <input className="btn" name="resume"  onChange={handleInputs} type="file" accept=".pdf , .doc , .docx"></input>
</div>
        {/* Modal Buttons Here */}
      </div>
      <br/> 
      {/* cancel/submit start */}
      <div className="mx-6 flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
         
              <button  onClick={() => setIsModalOpen(false)}  className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                &nbsp; Cancel &nbsp;
              </button>
            
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

                <p className="font-semibold text-2xl leading-right truncate"> Job Details</p>
                <p className="font-semibold text-1xl leading-right mt-5">Job type</p>

                <p className="bg-lime-200 text-lime-900 w-32 flex items-center">
                 <div>
                    Full Time 
                    </div> 
                    <BsFillBriefcaseFill className="ml-3"/>
                    <AiOutlineCheck/>
                </p>
                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="font-semibold text-1xl leading-right mt-5">Full job discription</p>
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
                  <p className="mt-3 font-semibold"> Salary</p>
                <p className="mt-1 h-9  bg-lime-200 text-lime-900 w-60 flex items-center"> 
                 <FaMoneyBillWave/> 
                   Rs-15000 -Rs-260000 Month
                    <AiOutlineCheck/>
                </p>
                <hr className="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-xl">Hiring Insights</p>
                <div className="flex items-center">

                <BsFillBriefcaseFill/>
                <p className="ml-4">Hiring 2 Candidates for this role</p>
                </div>
                {
                  urgentHiring &&
                  <div className=" flex items-center">
                    <BsStopwatch/> <p className=" ml-4">Urgently Hiring</p>
                </div>
                }

<hr className="my-3  border-gray-400 border-3"></hr>
                <p className="mt-3 font-semibold text-lg">Job activity</p>
                <div className="flex items-center">

                <BsFillBriefcaseFill/>
                <p className="ml-4">Employer reviewed this job 2 days ago</p>
                </div>
              </div>
            </div>
            {/* <!--/ card--> */}
          </div>
              }
                {/* container for full job details emds */}

        

          {/* Container for side by side forms end */}
        </div>

    
        
      </div>
    )
}