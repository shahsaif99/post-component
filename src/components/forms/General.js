
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCamera, FaVideo } from "react-icons/fa";
import {RiArticleLine,RiSurveyLine} from "react-icons/ri"
import { useDispatch } from "react-redux";
import { addGeneralPostData } from "../redux/actions";



export default function General() {
  
  const [postContent, setPostContent] = useState({post:"", pimg:"",pvideo:""});

  const dispatch=useDispatch();

 
	// let for storing name and value
	let name, value,file,type;
	// handleInputs for storing data into productData object



	const handleInputs = (e) =>{
		
		name = e.target.name;
		value=e.target.value;
		
	setPostContent({...postContent,[name] : value}); 

	}
	const uploadFiles= (e) => {
		file= e.target.files[0];
		name=e.target.name;

		setPostContent({...postContent,[name]:URL.createObjectURL(file)})
	}

  const onFormSubmit=(e)=>{
		e.preventDefault()
		dispatch(addGeneralPostData(postContent))
	   }

  return (
    <form className="flex flex-col gap-2 bg-white rounded-lg shadow-md p-4">
      <div className="flex gap-2">
        <FaUserCircle className="text-gray-500 text-2xl" />
        <input
          className="flex-1 resize-none border rounded-lg p-2"
          type="text"
          placeholder="What's on your mind?"
          value={postContent.post}
          name="post"
          onChange={handleInputs}
        />
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            name="pimg"
            className="absolute top-0 left-0 w-full h-full opacity-0"
            onChange={uploadFiles}
          />
          <FaCamera
            className="text-gray-500 text-2xl cursor-pointer"
            title="Upload image"
          />
        </div>
        <div className="relative">
          <input
            type="file"
            accept="video/*"
            name="pvideo"
            className="absolute top-0 left-0 w-full h-full opacity-0"
            onChange={uploadFiles}
          />
          <FaVideo
            className="text-gray-500 text-2xl cursor-pointer"
            title="Upload video"
          />
        </div>
        <Link to="/addpoll">

        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M9 8h6M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z" />
</svg>
        </Link>
      <div className="relative">
        <Link to="/addarticle">
          <RiArticleLine className="text-gray-500 text-2xl cursor-pointer"/>
        </Link>


      </div>
      <div className="relative"> 
      <Link to="/addsurvey">
     <RiSurveyLine className="text-gray-500 text-2xl cursor-pointer"/>
      </Link>
      </div>

      <div className="relative">
        <Link to="/posts">
          <RiArticleLine className="text-gray-500 text-2xl cursor-pointer text-black"/>
        </Link>


      </div>
      </div>
     
        <img
          src={postContent.pimg}
         
          className="my-2 rounded-lg max-h-96 object-contain"
        />
     
      { postContent.pvideo.length > 0 && 

        <video
        src={postContent.pvideo}
        
        className="my-2 rounded-lg max-h-96 object-contain"
        
        />
      } 
   
      <div className="flex justify-end">
        <button 
          onClick={onFormSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        
        >
          Post
        </button>
      </div>
    </form>
  );
}








