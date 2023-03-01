
import {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJobData } from "../redux/actions";



export default function Jobform() {
  const [jobData, setJobData] = useState({
    jname: "",
    cname: "",
    city: "",
    salary: "",
    experience: "",
    positions: "",
    fulltime: false,
    parttime: false,
    internship: false,
    contract: false,
    jnature: "",
    uhiring: "",
    aboutcompany: "",
    therole: "",
    requirements: "",
  });   

  const [titleError, setTitleError] = useState(true);
  const [cnameError, setCnameError] = useState(true);
  const [cityError, setCityError] = useState(true);
  const [salaryError, setSalaryError] = useState(true);
  const [positionsError, setPositionsError] = useState(true);
  const [aboutCompanyError, setAboutCompanyError] = useState(true);
  const [theRoleError, setTheRoleError] = useState(true);
  const [requirementsError, setRequirementsError] = useState(true);
  const [jNatureError, setJNatureError] = useState(true);



  

  const dispatch=useDispatch();

  let name, value, checked, type;

  const list=useSelector((state) => state.jobReducers );
    
 

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    checked = e.target.checked;
    type = e.target.type;

    setJobData({ ...jobData, [name]: type === "checkbox" ? checked : value });
    if (e.target.id === 'job-name') {

      if (e.target.value.length <= 4  ) {
        setTitleError(true)
      }
      else{
        setTitleError(false)
      }
      
    }
  
    else if (e.target.id === 'company-name') {
      
      if (e.target.value.length <= 4) {
        setCnameError(true)
      }
      
      else{
        setCnameError(false)
      }
      
    }
  
    else if (e.target.id === 'city-name') {
      
       if (e.target.value.length <= 2) {
         setCityError(true)
       }
       
       else{
         setCityError(false)
       }
     
       
     }
  
    
  
    else if (e.target.name === 'jnature') {
      
      if (e.target.value.length < 1) {
        setJNatureError(true)
      }
      
      else{
        setJNatureError(false)
      }
    
      
    }
  
    else if (e.target.id === 'salary') {
      const p = parseInt(e.target.value)
       if (e.target.value < 1) {
         setSalaryError(true)
       }
       else if(p > 1){
         setSalaryError(false)
       }
       else{
         setSalaryError(true)
       }
     
       
     }
  
     else if (e.target.id === 'positions') {
      const p = parseInt(e.target.value)
      
       if (e.target.value < 1   ) {
         setPositionsError(true)
       }
       else if(p > 0 ){
         setPositionsError(false)
       }
       else{
         setPositionsError(true)
       }
     
       
     }

     else if (e.target.id === 'about-company') {
    
      if (e.target.value.length <= 500) {
        setAboutCompanyError(true)
      }
      else if (e.target.value.length > 8000) {
        setAboutCompanyError(true)
      } 
      else{
        setAboutCompanyError(false)
      }
      
    }

    else if (e.target.id === 'role-details') {
    
      if (e.target.value.length <= 500) {
        setTheRoleError(true)
      }
      else if (e.target.value.length > 8000) {
        setTheRoleError(true)
      } 
      else{
        setTheRoleError(false)
      }
      
    }

    else if (e.target.id === 'requirements') {
    
      if (e.target.value.length <= 500) {
        setRequirementsError(true)
      }
      else if (e.target.value.length > 8000) {
        setRequirementsError(true)
      } 
      else{
        setRequirementsError(false)
      }
      
    }
  
  };
  
 
 const onFormSubmit=(e)=>{
  if(titleError  || cnameError || positionsError || cityError || salaryError || aboutCompanyError || theRoleError || requirementsError || jNatureError ){
    alert("Please Fill all the form correctly ")
  }
  else{
    e.preventDefault()
    dispatch(addJobData(jobData))
  }


 }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Job Details</p>
                <p>Please fill out all the fields.</p>
                <Link to={'/jobs'}>Jobs</Link>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="job-name">Job Title</label>
                    <input
                      type="text"
                      name="jname"
                      value={jobData.jname}
                      onChange={handleInputs}
                      id="job-name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                     
                    />
                      { titleError && <span className="text-xs text-red-600">Please enter valid Job title</span>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      type="text"
                      name="cname"
                      value={jobData.cname}
                      onChange={handleInputs}
                      id="company-name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                      { cnameError && <span className="text-xs text-red-600">Please enter valid Company name</span>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="city-name">City</label>
                    <input
                      type="text"
                      name="city"
                      value={jobData.city}
                      onChange={handleInputs}
                      id="city-name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                      { cityError && <span className="text-xs text-red-600">Please enter valid City name</span>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="salary">Salary</label>
                    <input
                      type="price"
                      name="salary"
                      value={jobData.salary}
                      onChange={handleInputs}
                      id="salary"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="15000-20000"
                    />
                      { salaryError && <span className="text-xs text-red-600">Salary should be in numbers i.e 15000-20000</span>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="experience">Experience required</label>
                   

                <input type="text" name="experience" value={jobData.experience} onChange={handleInputs} id="experience"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="1-2 years" />
              </div>

              <div className="md:col-span-5">
  <label htmlFor="positions">Number of Positions</label>
  <input type="number" name="positions" value={jobData.positions} onChange={handleInputs} id="positions"  className="h-10 border mt-1 rounded px-4 w-full sm:w-56 md:w-full bg-gray-50"  placeholder="0000" />
  { positionsError && <span className="text-xs text-red-600">Positions should be in numbers </span>}
</div>

{/* select job type start */}
<span className="mb-1 w-44 sm:w-auto">Select Job type:</span>
<br/>
<div className="flex flex-wrap items-center md:col-span-5">
  <input 
    type="checkbox" 
    id="fulltime" 
    checked={jobData.fulltime}
    onChange={handleInputs}
    name="fulltime"
  />
  <label className="ml-1 " htmlFor="fulltime">Full-time</label>

  <input 
    className="ml-2"
    type="checkbox" 
    id="parttime" 
    checked={jobData.parttime}
    onChange={handleInputs}
    name="parttime"
  />
  <label className="ml-1 " htmlFor="parttime">Part-time</label>

  <input 
    className="ml-2"
    type="checkbox" 
    id="contract" 
    checked={jobData.contract}
    onChange={handleInputs}
    name="contract"
  />
  <label className="ml-1 " htmlFor="contract">Contract</label>

  <input 
    className="ml-2"
    type="checkbox" 
    id="internship" 
    checked={jobData.internship}
    onChange={handleInputs}
    name="internship"
  />
  <label className="ml-1 " htmlFor="internship">Internship</label>
</div> 
{/* Select job type ends */}    

{/* Select job nature start */}
<legend className="mb-1 w-44 sm:w-auto">Select Job Nature:</legend>
<div className="flex flex-wrap items-center md:col-span-5">

  <input 
    type="radio"
    id="onsite"
    name="jnature"
    value="on-site"
    onChange={handleInputs}

  />
  <label className="ml-1" htmlFor="onsite">On-Site</label>

  <input 
    type="radio"
    id="remote"
    name="jnature"
    value="Remote"
    onChange={handleInputs}
    className="ml-2"
  />
  <label className="ml-1" htmlFor="remote">Remote</label>

  <input 
    type="radio"
    id="hybird"
    name="jnature"
    value="Hybird"
    onChange={handleInputs}
    className="ml-2"
  />
  <label className="ml-1" htmlFor="hybird">Hybird</label>
  { jNatureError && <span className="ml-2 text-xs text-red-600">Atleast one field should be selected</span>}
</div>
{/* Job Type Ends */}

{/*urgent Hiring start */}
<legend className="mb-1 w-44 sm:w-auto">Urgently hiring?:</legend>
<div className="flex flex-wrap items-center md:col-span-5">
  <input 
    type="radio"
    id="yes"
    name="uhiring"
    value="Yes"
    onChange={handleInputs}

  />
                        <label className="ml-1" htmlFor="yes">Yes</label>
                    
                        <input 
                            type="radio"
                            id="no"
                            name="uhiring"
                            value="No"
                            onChange={handleInputs}
                            className="ml-2"
                            
                        />
                        <label className="ml-1" htmlFor="no">No</label>
                        </div>
                        {/* URgent Hiring end */}

			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> About company</span>
				<textarea id="about-company" rows="9" name="aboutcompany"  value={jobData.aboutcompany} onChange={handleInputs}  placeholder="Tell us about your company" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>
      { aboutCompanyError && <span className="text-xs text-red-600">Discription should between 500 to 8000 characters </span>}
              </div>
              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Role Details</span>
				<textarea id="role-details" rows="9" name="therole"  value={jobData.therole} onChange={handleInputs}  placeholder="Tell us about role of job" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>
      { theRoleError && <span className="text-xs text-red-600">Discription should between 500 to 8000 characters </span>}

              </div>

              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Compulsory requirements</span>
				<textarea id="requirements" rows="9" name="requirements"  value={jobData.requirements} onChange={handleInputs}  placeholder="Tell us about role of job" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>
      { requirementsError && <span className="text-xs text-red-600">Discription should between 500 to 8000 characters </span>}

              </div>

             

              
					
     
              <div className="flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/posttype">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &nbsp; Back &nbsp;
              </button>
            </Link>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onFormSubmit}>
              Submit
            </button>
            
          </div>
      </div>
      
             

            </div>
          
        </div>
      </div>
    </div>

   
  </div>
</div>
        )
}
       