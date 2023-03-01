import React from "react";
import { Link } from "react-router-dom";

export default function Post(props){
    
    const [postType,setPostType]=React.useState({post:"/selectpost"})
    
     

  let name, value;
  const handleInputs = (e) =>{
		name = e.target.name;
		value=e.target.value;
	setPostType({...postType,[name]:value}); 
    
	}

 
  return(
    <div> 
              

            {/* post type options */}
            { 
            // createPost &&
                <div>

                <ul className="  m-10 max-w-md mx-auto">
               
                {/* Post heading */}
                <li className="relative mb-1 ml-1 text-4xl mb-3">
                    Select post type
                </li>
                {/* post heading end */}

{/* Product type  */}

  <li className="relative mb-1">
<Link to="/addproduct">
    <input className="sr-only peer" type="radio" value="/addproduct" name="post" id="answer_yes" onClick={handleInputs}/>
</Link>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes">Product/Services</label>

    </li>
    {/* product type end */}
  
  

{/*  job type start */}
   <li className="relative mb-1">
   <Link to="/posttype">
    <input className="sr-only peer" type="radio" value="/posttype" name="post" id="answer_job" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_job">Job/Project</label>
    </Link>
    </li>
{/* job type end */}


    {/* Course type start */}
<li className="relative mb-1">
<Link to="/courseform">
    <input className="sr-only peer" type="radio" value="/courseform" name="post" id="answer_course" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_course">Course</label>
</Link>
    </li>
    {/* Course type end */}

     {/* Idea type start */}
<li className="relative mb-1">
<Link to="/ideaform">
    <input className="sr-only peer" type="radio" value="/ideaform" name="post" id="answer_idea" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_idea">Idea</label>
</Link>
    </li>
    {/* Idea type end */}

{/* General type start */}
  <li className="relative mb-1">
    <Link to="/generalform">
    <input className="sr-only peer" type="radio" value="/generalform" name="post" id="answer_general" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_general">General</label>
    </Link>
          
    </li>
    {/* General type end */}

    {/* Help/recomenadation type start */}
  <li className="relative mb-1">
    < Link to="/helpform">
    <input className="sr-only peer" type="radio" value="/helpform" name="post" id="answer_help" onClick={handleInputs}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_help">Help/Recomenadations</label>
    </Link>

    </li>
    {/* help/recommendation type end */}

{/* post type options end */}

{/* next/back buttons start*/}
<li className="relative flex">
<Link to="/">
 <button  className=" rounded-lg  bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Back
              </button>
</Link>
            
</li>
</ul>

              {/* next/back button end */}
                </div>
}
      </div>
    )
}


{/* <Link to={postType.post}>
<button onClick={event =>props.onClick(postType.post)} className="   rounded-lg bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Next
</button>
</Link> */}







          
