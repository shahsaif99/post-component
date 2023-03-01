import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHelpData } from "../redux/actions";


export default function Helpform(){
    // const for storing form data
	const [helpData,setHelpData]=React.useState({sub:"",hdiscription:"",himg:""})
  const [subjectError, setSubjectError] =React.useState(true);
  const [discriptionError, setdiscriptionError] = React.useState(true);

  const dispatch=useDispatch();

// let for storing name and value
let name, value,file,type;
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
		
  name = e.target.name;
  value=e.target.value;
  
setHelpData({...helpData,[name] : value}); 
if (e.target.id === 'subject') {

  if (e.target.value.length <= 5  ) {
    setSubjectError(true)
  }
  else{
    setSubjectError(false)
  }
  
}

else if (e.target.id === 'disc') {

  if (e.target.value.length <= 20) {
    setdiscriptionError(true)
  }
  else if (e.target.value.length > 8000) {
    setdiscriptionError(true)
  } 
  else{
    setdiscriptionError(false)
  }
  
}


}
const uploadImage = (e) => {
  file= e.target.files[0];
  name=e.target.name;

  setHelpData({...helpData,[name]:URL.createObjectURL(file)})
}
const onFormSubmit=(e)=>{
  if( subjectError  || discriptionError ){
    alert("Please Fill all the form correctly ")
  }
  else{

    e.preventDefault()
  dispatch(addHelpData(helpData))
  }

  
   }
    
    return(
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Help/Recomenadations Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="sub" value={helpData.sub} onChange={handleInputs} id="subject" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                { subjectError && <span className="text-xs text-red-600">Please enter valid subject</span>}

              </div>

              
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1"> Discription</span>
				<textarea id="disc" rows="9" name="hdiscription" value={helpData.hdiscription} onChange={handleInputs} placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
        { discriptionError && <span className="text-xs text-red-600">Discription should between 20 to 8000 characters</span>}

      </label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload Image</span><br/>
		            </label>
		          <input className="btn" name="himg" onChange={uploadImage}  type="file" accept="image/png, image/gif, image/jpeg"></input>
			  </div>
             <img src={helpData.himg}/>
		 			


              
					

             <div className="flex flex-col md:flex-row md:col-span-5 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/selectpost">
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