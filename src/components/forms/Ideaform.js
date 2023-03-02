import {useState} from "react";
import { useDispatch } from "react-redux";
import { addIdeaData } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Ideaform(){
// const for storing form data
const [ideaData,setIdeaData]=useState({idea:"",budget:"",your_discription:"",skills:"",about_idea:"",idea_img:""})

const [titleError, setTitleError] = useState(true);
const [salaryError, setSalaryError] = useState(true);
const [aboutCompanyError, setAboutCompanyError] = useState(true);
  const [theIdeaError, setTheIdeaError] = useState(true);
  
  const [skillsError, setSkillsError] = useState(true);
  const [imageError, setImage] = useState(true);
	

const dispatch=useDispatch();


let name, value,file,type;
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
		
  name = e.target.name;
  value=e.target.value;
  
setIdeaData({...ideaData,[name] : value}); 

if (e.target.id === 'idea') {

  if (e.target.value.length <= 4  ) {
    setTitleError(true)
  }
  else{
    setTitleError(false)
  }
  
}

else if (e.target.id === 'budget') {
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

 else if (e.target.id === 'author') {
    
  if (e.target.value.length <= 300) {
    setAboutCompanyError(true)
  }
  else if (e.target.value.length > 8000) {
    setAboutCompanyError(true)
  } 
  else{
    setAboutCompanyError(false)
  }
  
}

else if (e.target.id === 'about-idea') {
    
  if (e.target.value.length <= 300) {
    setTheIdeaError(true)
  }
  else if (e.target.value.length > 8000) {
    setTheIdeaError(true)
  } 
  else{
    setTheIdeaError(false)
  }
  
}

else if (e.target.id === 'skills') {
    
  if (e.target.value.length <= 300) {
    setSkillsError(true)
  }
  else if (e.target.value.length > 8000) {
    setSkillsError(true)
  } 
  else{
    setSkillsError(false)
  }
  
}



}
const uploadFile = (e) => {
  file= e.target.files[0];
  name=e.target.name;

  setIdeaData({...ideaData,[name]:URL.createObjectURL(file)})

  if(e.target.files.length>1){
    setImage(true)
   }
   else{
    setImage(false)
   }
}

const onFormSubmit=(e)=>{
  if(titleError  || skillsError || imageError || aboutCompanyError || salaryError || theIdeaError ){
    alert("Please Fill all the form correctly ")
  }
  else{

    e.preventDefault()
  dispatch(addIdeaData(ideaData))
  setIdeaData({idea:"",budget:"",your_discription:"",skills:"",about_idea:"",idea_img:""})
  setTitleError(true)
  setSalaryError(true)
  setAboutCompanyError(true)
  setTheIdeaError(true)
  setSkillsError(true)
  setImage(true)
  }

  
   }

    return(
        		
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Idea Details</p>
            <p>Please fill out all the fields.</p>

            <div className="mt-24">

			<Link  to="/ideas">View ideas</Link>
			</div>

          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="idea">Idea Title</label>
                <input  type="text" name="idea"  value={ideaData.idea} onChange={handleInputs} id="idea" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                { titleError && <span className="text-xs text-red-600">Please enter valid title</span>}
              </div>

              <div className="md:col-span-5">
                <label htmlFor="budget">Budget Required</label>
                <input  type="price" name="budget" value={ideaData.budget} onChange={handleInputs} id="budget"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" />
                { salaryError && <span className="text-xs text-red-600">Please enter correct value</span>}
              </div>
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1">Authoer-Discription</span>
				<textarea id="author"  rows="9" name="your_discription" value={ideaData.your_discription} onChange={handleInputs}  placeholder="tell us more about your self" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
        { aboutCompanyError && <span className="text-xs text-red-600">Discription should be between 300 to 8000 characters</span>}
      </label>

              </div>
              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1">About-Project</span>
				<textarea id="about-idea" rows="9" name="about_idea" value={ideaData.about_idea} onChange={handleInputs}  placeholder="tell us more about your Idea" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
        { theIdeaError && <span className="text-xs text-red-600">Discription should be between 300 to 8000 characters</span>}

    	</label>

              </div>
              <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1">Skills </span>
				<textarea id="skills" rows="9" name="skills" value={ideaData.skills} onChange={handleInputs}  placeholder="Skills  for applying" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
        { skillsError && <span className="text-xs text-red-600">Discription should be between 300 to 8000 characters</span>}

    	</label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload Supporting Image</span><br/>
		            </label>
		          <input required className="btn" name="idea_img"  onChange={uploadFile}  type="file" accept="image/png, image/gif, image/jpeg"></input>
			  </div>
		 			
        <img src={ideaData.idea_img}/>
             

              
					

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