import React from "react";
import { Link } from "react-router-dom";

export default function Posttype(){
    const [subValue,setSubValue]=React.useState({select:"/posttype"})
    
    let name, value;
  const handleInputs = (e) =>{
        
		name = e.target.name;
		value=e.target.value;
        

	setSubValue({...subValue,[name]:value}); 
    

	}

    
    
    return(
        <div>
                {/* Select Job type start */}
                <ul className="  m-10 max-w-md mx-auto">
               
               {/* Post heading */}
               <li className="relative mb-1 ml-1 text-4xl mb-3">
                   Select post type
               </li>
               {/* post heading end */}

{/* Job type Select Start  */}
 <li className="relative mb-1">
    <Link to="/jobform">
   <input className="sr-only peer" type="radio" value="/jobform" name="select" id="job"  onClick={handleInputs}/>
   <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="job">Job</label>
    </Link>

   </li>
   {/* Job type end */}

   {/*  Project type start */}
   <li className="relative mb-1">
    <Link to="/projectform">
    <input className="sr-only peer" type="radio" value="/projectform" name="select" id="project" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="project">Project</label>
    </Link>

    </li>
{/* Project type end */}
                {/* next/back buttons start*/}
<li className="relative flex">
<Link to="/selectpost">
 <button  className=" rounded-lg  bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Back
              </button>
</Link>
            
</li>
{/* next/back buttons end */}
                </ul>
                {/* select job type end */}
    
                </div>

    )
}