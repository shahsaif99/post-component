
import React from "react";
import { Link } from "react-router-dom";

export default function Jobform() {
  const [jobData, setJobData] = React.useState({
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
  let name, value, checked, type;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    checked = e.target.checked;
    type = e.target.type;

    setJobData({ ...jobData, [name]: type === "checkbox" ? checked : value });
  };
  console.log(jobData)
 
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Job Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Job Title</label>
                    <input
                      type="text"
                      name="jname"
                      value={jobData.jname}
                      onChange={handleInputs}
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required={true}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                      type="text"
                      name="cname"
                      value={jobData.cname}
                      onChange={handleInputs}
                      id="company_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="city-name">City</label>
                    <input
                      type="text"
                      name="city"
                      value={jobData.city}
                      onChange={handleInputs}
                      id="city_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
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
                      placeholder="0000"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="experience">Experience required</label>
                   

                <input type="text" name="experience" value={jobData.experience} onChange={handleInputs} id="experience"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="1-2 years" />
              </div>

              <div className="md:col-span-5">
  <label htmlFor="positions">Number of Positions</label>
  <input type="number" name="positions" value={jobData.positions} onChange={handleInputs} id="positions"  className="h-10 border mt-1 rounded px-4 w-full sm:w-56 md:w-full bg-gray-50"  placeholder="0000" />
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
				<textarea rows="9" name="aboutcompany"  value={jobData.aboutcompany} onChange={handleInputs}  placeholder="Tell us about your company" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>

              </div>
              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Role Details</span>
				<textarea rows="9" name="therole"  value={jobData.therole} onChange={handleInputs}  placeholder="Tell us about role of job" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>

              </div>

              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Compulsory requirements</span>
				<textarea rows="9" name="requirements"  value={jobData.requirements} onChange={handleInputs}  placeholder="Tell us about role of job" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>

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
        )
}
       