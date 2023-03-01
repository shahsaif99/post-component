import { useState} from "react";

import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProjectData } from "../redux/actions";


export default function Projectform(){
  // const for storing form data
	const [projectData,setProjectData]=useState({prname:"",skills:"",ptype:"",currency:"",minsalary:"",maxsalary:"",pdiscription:"",days:"0"})
	
  const [titleError, setTitleError] = useState(true);
  const [skillsError, setSkillsError] = useState(true);
  const [typeError, setTypeError] = useState(true);
  const [currencyError, setCurrencyError] = useState(true);
  const [minSalaryError, setMinSalaryError] = useState(true);
  const [maxSalaryError, setMaxSalaryError] = useState(true);
  const [discError, setDiscError] = useState(true);

  



  const dispatch=useDispatch();

  
  // let for storing name and value
	let name, value;
	// handleInputs for storing data into productData object
	const handleInputs = (e) =>{
		name = e.target.name;
		value=e.target.value;
	setProjectData({...projectData,[name]:value}); 

  if (e.target.id === 'projectname') {

    if (e.target.value.length <= 4  ) {
      setTitleError(true)
    }
    else{
      setTitleError(false)
    }
    
  }

  else if (e.target.id === 'discription') {
    
    if (e.target.value.length <= 1000) {
      setDiscError(true)
    }
    else if (e.target.value.length > 8000) {
      setDiscError(true)
    } 
    else{
      setDiscError(false)
    }
    
  }

  else if (e.target.id === 'skills') {
    
     if (e.target.value <= 2) {
       setSkillsError(true)
     }
     
     else{
       setSkillsError(false)
     }
   
     
   }

   else if (e.target.name === 'ptype') {
    
    if (e.target.value.length < 1) {
      setTypeError(true)
    }
    
    else{
      setTypeError(false)
    }
  
    
  }

  else if (e.target.name === 'currency') {
    
    if (e.target.value.length < 1) {
      setCurrencyError(true)
    }
    
    else{
      setCurrencyError(false)
    }
  
    
  }

  else if (e.target.id === 'minsalary') {
    const p = parseInt(e.target.value)
     if (e.target.value < 1) {
       setMinSalaryError(true)
     }
     else if(p > 1){
       setMinSalaryError(false)
     }
     else{
       setMinSalaryError(true)
     }
   
     
   }

   else if (e.target.id === 'maxsalary') {
    const p = parseInt(e.target.value)
    
     if (e.target.value < 1 && e.target.value < projectData.minsalary  ) {
       setMaxSalaryError(true)
     }
     else if(p > 1 && p > projectData.minsalary){
       setMaxSalaryError(false)
     }
     else{
       setMaxSalaryError(true)
     }
   
     
   }

	}

   
	const onFormSubmit=(e)=>{
		if(titleError  || skillsError || typeError || currencyError || minSalaryError || maxSalaryError || discError ){
      alert("Please Fill all the form correctly ")
    }
    else{

      e.preventDefault()
      dispatch(addProjectData(projectData))
    }
	   }

	
  
    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
           
      
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Project Details</p>
                  <p>Please fill out all the fields.</p>
                  <div className="mt-24">

			<Link  to="/projects">View Projects</Link>
			</div>
                </div>
      
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="projectname">Choose a name for Project</label>
                      <input type="text" name="prname" value={projectData.prname} onChange={handleInputs} id="projectname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                      { titleError && <span className="text-xs text-red-600">Please enter valid project name</span>}
                    </div>
      
                   
                    {/* discription */}
                    <div className="md:col-span-5">
                    <label className="block ">
                      <span className="mb-1">Project Discription</span>
                      <textarea id="discription" rows="9" name="pdiscription" value={projectData.pdiscription} onChange={handleInputs} placeholder="Tell us more about your project" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
                      { discError && <span className="text-xs text-red-600">Project Discription should be between 1000 to 8000 characters</span>}
                  </label>
      
                    </div>
                    {/* discription ends */}
                    {/* skills required start */}
                    <div className="md:col-span-5">
                    <label className="block ">
                      <span className="mb-1">Skills required for project</span>
                      <textarea rows="2" name="skills" value={projectData.skills} onChange={handleInputs} id="skills" placeholder="Exp Wordpress,React,PHP" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
                     { skillsError && <span className="text-xs text-red-600">Please enter valid skills</span>}
                 
                  </label>
      
                    </div>
                    {/* skills required ends */}
                   
      
                              {/*job type start */}
                           <legend className="mb-1 w-44">How do you want to pay?</legend>
                                     <div className="flex items-center md:col-span-5">
              
                       <input 
                                  type="radio"
                                  id="yes"
                                  name="ptype"
                                  value="Hourly"
                                  onChange={handleInputs}
                                  
                              />
                              <label className="ml-1" htmlFor="yes">Hourly</label>
                          
                              <input 
                                  type="radio"
                                  id="no"
                                  name="ptype"
                                  value="Fixed"
                                  className="ml-2"
                                  onChange={handleInputs}
                                  
                              />
                              <label className="ml-1" htmlFor="no">Fixed</label>
                              { typeError && <span className="text-xs text-red-600 ml-2">Select atleast one field</span>}
                              </div>
                              {/* job type s end */}
      
                  
                   {/* Currency Type */}
                   <legend className="mb-1 w-44 ">Currency</legend>
                                     <div className="flex items-center md:col-span-5">
              
                       <input 
                                  type="radio"
                                  id="yes"
                                  name="currency"
                                  value="USD"
                                  onChange={handleInputs}
                                  
                              />
                              <label className="ml-1" htmlFor="yes">USD</label>
                          
                              <input 
                                  type="radio"
                                  id="no"
                                  name="currency"
                                  value="PKR"
                                  className="ml-2"
                                  onChange={handleInputs}
                                  
                              />
                              <label className="ml-1" htmlFor="no">PKR</label>

                              <input 
                                  type="radio"
                                  id="no"
                                  name="currency"
                                  value="INR"
                                  className="ml-2"
                                  
                                  onChange={handleInputs}
                              />
                              <label className="ml-1" htmlFor="no">INR</label>

                              <input 
                                  type="radio"
                                  id="no"
                                  name="currency"
                                  value="GBP"
                                  className="ml-2"
                                  onChange={handleInputs}
                                  
                              />
                              <label className="ml-1" htmlFor="no">GBP</label>
                              { currencyError && <span className="text-xs text-red-600 ml-2">Select atleast one field</span>}
                              </div>

                   {/* Currency type */}

                   {/* Payment Range */}
                   <div className="md:col-span-5">
                      <label htmlFor="minsalary">Min-Range</label>
                      <input type="number" name="minsalary" value={projectData.minsalary} onChange={handleInputs} id="minsalary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="100" />
                      { minSalaryError && <span className="text-xs text-red-600 ml-2">Enter Valid Data</span>}<br/><br/>
                      <label className="mt-5" htmlFor="maxsalary">Max-Range</label>
                      <input type="number" name="maxsalary" value={projectData.maxsalary} onChange={handleInputs} id="maxsalary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                      { maxSalaryError && <span className="text-xs text-red-600 ml-2">Max budget should be less then min-Range</span>}<br/><br/>

                      <label htmlFor="maxsalary">Deadline</label>
                      <input type="number" name="days" value={projectData.days} onChange={handleInputs} id="deadline" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                    </div>
      

                   {/* Payment range end */}
      
                   
           
                    
                          
      
                   <div className="flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/posttype">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &nbsp; Back &nbsp;
              </button>
            </Link>
          </div>
          <div className="flex justify-end">
            <button onClick={onFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
      </div>
        
    )
}