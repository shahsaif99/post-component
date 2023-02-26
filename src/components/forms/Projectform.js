import React from "react";
import {Link} from "react-router-dom"


export default function Projectform(){
  // const for storing form data
	const [projectData,setProjectData]=React.useState({prname:"",skills:"",ptype:"",currency:"",minsalary:"",maxsalary:"",pdiscription:""})
	// let for storing name and value
	let name, value;
	// handleInputs for storing data into productData object
	const handleInputs = (e) =>{
		name = e.target.name;
		value=e.target.value;
	setProjectData({...projectData,[name]:value}); 

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
                </div>
      
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="projectname">Choose a name for Project</label>
                      <input type="text" name="prname" value={projectData.prname} onChange={handleInputs} id="projectname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                    </div>
      
                   
                    {/* discription */}
                    <div className="md:col-span-5">
                    <label className="block ">
                      <span className="mb-1">Project Discription</span>
                      <textarea rows="9" name="pdiscription" value={projectData.pdiscription} onChange={handleInputs} placeholder="Tell us more about your project" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
                  </label>
      
                    </div>
                    {/* discription ends */}
                    {/* skills required start */}
                    <div className="md:col-span-5">
                    <label className="block ">
                      <span className="mb-1">Skills required for project</span>
                      <textarea rows="2" name="skills" value={projectData.skills} onChange={handleInputs} placeholder="Exp Wordpress,React,PHP" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
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
                              </div>
                              {/* job type s end */}
      
                  
                   {/* Currency Type */}
                   <legend className="mb-1 w-44">Currency</legend>
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
                              </div>

                   {/* Currency type */}

                   {/* Payment Range */}
                   <div className="md:col-span-5">
                      <label htmlFor="minsalary">Min-Range</label>
                      <input type="text" name="minsalary" value={projectData.minsalary} onChange={handleInputs} id="minsalary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                      <label htmlFor="maxsalary">Max-Range</label>
                      <input type="text" name="maxsalary" value={projectData.maxsalary} onChange={handleInputs} id="maxsalary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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