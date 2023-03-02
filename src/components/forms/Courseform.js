import {useState} from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addCourseData } from "../redux/actions";

export default function Courseform(){
  // const for storing form data
	const [courseData,setCourseData]=useState({ctitle:"",price:"",cdiscription:"",cimg:"",cvid:""})


  const [titleError, setTitleError] = useState(true);
const [priceError, setPriceError] = useState(true);
const [discError, setDiscError] = useState(true);
const [imageError, setImage] = useState(true);
	

	const dispatch=useDispatch();

// let for storing name and value
let name, value,file,type;
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
		
  name = e.target.name;
  value=e.target.value;
  
setCourseData({...courseData,[name] : value}); 

if (e.target.id === 'coursetittle') {

  if (e.target.value.length <= 3  ) {
    setTitleError(true)
  }
  else{
    setTitleError(false)
  }
  
}

else if (e.target.id === 'price') {
  const p = parseInt(e.target.value)
   if (e.target.value < 1) {
     setPriceError(true)
   }
   else if(p > 1){
     setPriceError(false)
   }
   else{
     setPriceError(true)
   }
 
   
 }

 else if (e.target.id === 'disc') {

  if (e.target.value.length <= 20) {
    setDiscError(true)
  }
  else if (e.target.value.length > 500) {
    setDiscError(true)
  } 
  else{
    setDiscError(false)
  }
  
}

}
const uploadVideo = (e) => {
  file= e.target.files[0];
  name=e.target.name;

  setCourseData({...courseData,[name]:URL.createObjectURL(file)})
 


}

const uploadImage = (e) => {
  file= e.target.files[0];
  name=e.target.name;

  setCourseData({...courseData,[name]:URL.createObjectURL(file)})
  console.log(e.target.files.length)
 
  if(e.target.files.length>1){
    setImage(true)
   }
   else{
    setImage(false)
   }

}

const onFormSubmit=(e)=>{
  if(titleError  || discError || priceError || imageError  ){
    alert("Please Fill all the form correctly ")
  }
  else{

    e.preventDefault()
    dispatch(addCourseData(courseData))
    setCourseData({ctitle:"",price:"",cdiscription:"",cimg:"",cvid:""})
    setTitleError(true)
    setPriceError(true)
    setDiscError(true)
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
            <p className="font-medium text-lg">Course Details</p>
            <p>Please fill out all the fields.</p>

            <div className="mt-24">

			<Link  to="/courses">View courses</Link>
			</div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="coursetittle">Course Title</label>
                <input type="text" name="ctitle" value={courseData.ctitle} onChange={handleInputs}  id="coursetittle" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                { titleError && <span className="text-xs text-red-600">Please enter valid course title</span>}

              </div>

              <div className="md:col-span-5">
                <label htmlFor="price">Price</label>
                <input type="price" name="price" id="price" value={courseData.price} onChange={handleInputs}  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" />
                { priceError && <span className="text-xs text-red-600">Please enter valid price</span>}
             </div>
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1">Course Discription</span>
				<textarea id="disc" rows="9" name="cdiscription" value={courseData.cdiscriptions} onChange={handleInputs}  placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
        { discError && <span className="text-xs text-red-600">Discription should be between 20 to 500 characters</span>}
      </label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload thumbnail Image</span><br/>
		            </label>
		          <input className="btn" name="cimg" onChange={uploadImage}  type="file" accept="image/png, image/gif, image/jpeg"></input>
			  </div>
		 			<img src={courseData.cimg}/>
              <div className="md:col-span-5">

<label className="block w-56">
          <span className="mb-1">Upload Sample Video</span><br/>
      </label>
    <input className="btn" name="cvid"  onChange={uploadVideo}  type="file" accept="video/mp4,video/x-m4v,video/*"></input>
</div>
{ courseData &&

<video src={courseData.cvid}/>
}
             

              
					

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