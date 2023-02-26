import React from "react"
import { Link } from "react-router-dom"


export default function Courseform(){
  // const for storing form data
	const [courseData,setCourseData]=React.useState({ctitle:"",price:"",cdiscription:"",cimg:"",cvid:""})
	// let for storing name and value
// let for storing name and value
let name, value,file,type;
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
  name = e.target.name;
  value=e.target.value;
  file=e.target.files[0];
  type=e.target.type
setCourseData({...courseData,[name]:type === "file" ? URL.createObjectURL(file) : value}); 

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
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="coursetittle">Course Title</label>
                <input type="text" name="ctitle" value={courseData.ctitle} onChange={handleInputs}  id="coursetittle" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="price">Price</label>
                <input type="price" name="price" id="price" value={courseData.price} onChange={handleInputs}  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0000" />
              </div>
			  <div className="md:col-span-5">
			  <label className="block ">
				<span className="mb-1">Course Discription</span>
				<textarea rows="9" name="cdiscription" value={courseData.cdiscriptions} onChange={handleInputs}  placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
			</label>

              </div>
			  <div className="md:col-span-5">

			  <label className="block w-56">
		                <span className="mb-1">Upload thumbnail Image</span><br/>
		            </label>
		          <input className="btn" name="cimg" onChange={handleInputs}  type="file" accept="image/png, image/gif, image/jpeg"></input>
			  </div>
		 			<img src={courseData.cimg}/>
              <div className="md:col-span-5">

<label className="block w-56">
          <span className="mb-1">Upload Sample Video</span><br/>
      </label>
    <input className="btn" name="cvid"  onChange={handleInputs}  type="file" accept="video/mp4,video/x-m4v,video/*"></input>
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