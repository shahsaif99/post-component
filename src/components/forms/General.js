
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCamera, FaVideo } from "react-icons/fa";
import {RiArticleLine,RiSurveyLine} from "react-icons/ri"



export default function General() {
  
  const [postContent, setPostContent] = useState({post:"", pimg:"",pvideo:""});
 
// let for storing name and value
let name, value,file,type;
// handleInputs for storing data into productData object
const handleInputs = (e) =>{
  name = e.target.name;
  value=e.target.value;
  file=e.target.files[0];
  type=e.target.type
setPostContent({...postContent,[name]:type === "file" ? URL.createObjectURL(file) : value}); 

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
            onChange={handleInputs}
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
            onChange={handleInputs}
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
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        
        >
          Post
        </button>
      </div>
    </form>
  );
}








// import React from "react";
// import { Link } from "react-router-dom";
// import {FcImageFile, FcLeave } from "react-icons/fc"
// import {BiPoll,BiArrowBack} from "react-icons/bi"
// import {GrArticle} from "react-icons/gr"
// import {RiVideoAddLine} from "react-icons/ri"



// export default function General(){
//   const [article,setArticle]=React.useState(false)

//   function toggle(){
//     setArticle(prevstate => !prevstate)
//   }
//     return(
//         <div>
//           { !article &&

//             <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//   <div class="container max-w-screen-lg mx-auto">
//     <div>
     
//       <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//         <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 ">
//           <div class="text-gray-600">
//             <p class="font-medium text-lg mb-5">Create Post</p>
           
         
//             <div class="  text-sm min-w-fit">
              
//             <label className="block ">
// 				<span className="mb-1"></span>
// 				<textarea rows="9" name="discription" placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
// 			</label>
             

              

            

              

              

            

           
//               <div class="md:col-span-5 text-right">
//                 <div class="inline-flex items-end">
//                   <div className="flex mr-14 space-x-3">
//                     <Link to="/selectpost">
//                     <BiArrowBack className=" text-4xl space"/>
//                     </Link>

//            <label htmlFor="image">
//              <FcImageFile  className=" text-4xl space" />
//             </label>      
//             <input className="btn" hidden={true} id="image" name="pimg"  type="file" accept="image/png, image/gif, image/jpeg"/>
             
//                <label htmlFor="video">
//                   <RiVideoAddLine className="text-4xl text-teal-600"/>
//                </label>
//                <input className="btn" hidden={true} id="video" name="uvideo"  type="file" accept="video/mp4,video/x-m4v,video/*"/>

//                 <BiPoll className="text-4xl"/>
//                 <GrArticle onClick={toggle} className="text-4xl"/>
//                   </div>

//                   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">post</button>
               
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

   
//   </div>
// </div>
//       }
//       { article &&
//            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//            <div className="container max-w-screen-lg mx-auto">
//              <div>
              
         
//                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//                    <div className="text-gray-600">
//                      <p className="font-medium text-lg">Write your article</p>
//                      <p>Please fill out all the fields.</p>
//                    </div>
         
//                    <div className="lg:col-span-2">
//                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                        <div className="md:col-span-5">
//                          <label htmlFor="subject">Title</label>
//                          <input type="text" name="sub"  id="subject" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
//                        </div>
         
                       
//                  <div className="md:col-span-5">
//                  <label className="block ">
//                  <span className="mb-1"> Starting Para</span>
//                  <textarea rows="9" name="hdiscription"  placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
//                </label>
         
//                        </div>
//                        <div className="md:col-span-5">
//                  <label className="block ">
//                  <span className="mb-1"> Remaining Article</span>
//                  <textarea rows="100" name="hdiscription"  placeholder="Whats in your mind?s" className=" block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-100"></textarea>
//                </label>
         
//                        </div>
//                  <div className="md:col-span-5">
         
//                  <label className="block w-56">
//                              <span className="mb-1">Upload Image</span><br/>
//                          </label>
//                        <input className="btn" name="himg"  type="file" accept="image/png, image/gif, image/jpeg"></input>
//                  </div>

//                  <div className="md:col-span-5">
         
//                  <label className="block w-56">
//                              <span className="mb-1">Upload Audio</span><br/>
//                          </label>
//                        <input className="btn" name="himg"  type="file" accept="audio/*"></input>
//                  </div>
                    
                    
         
                      
         
                       
                   
         
                  
                 
         
//                    <button  onClick={toggle}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             back
//                          </button>
                 
//                        <div className=" ml-96 ">
//                          <div className="inline-flex items-end">
//                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//                          </div>
//                    </div>
                      
         
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
         
            
//            </div>
//          </div>



//       }
//         </div>
//     )
// }