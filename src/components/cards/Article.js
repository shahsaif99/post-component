import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles




export default function Article(){

  const data=useSelector((state)=>state.articleReducers.data)

    return(
      <div>

      
      { data?.map((elem) => (
<div key={elem.id} className="w-fit h-fit  mb-4 ">
<h1 className=" lg:text-3xl font-semibold leading-tight pl-3 pt-3 ">
 {elem.data.title}
</h1>
<hr className="mt-6  border-gray-300 border-3"></hr>
<div className="mt-2 ml-2 text-sm flex"> 
<p className=" text-slate-500">Zarrar kuhro</p>
<p className="text-slate-500 mx-2">|</p>
<p className=""> Published February 13, 2023
</p>
</div>

<div className=" ">



  <img src={elem.data.image} className="ml-24 mt-24 mb-40 mr-40 w-72 h-72 inline-block  shadow-2xl shadow-gray-500"/>
  
 </div>
 <div><p className="ml-2 text-slate-500">The writer is journalist</p></div>
 <hr className="mt-1  border-gray-300 border-3"></hr>
 <div>




<div className="text-center max-w-screen-sm">
<div dangerouslySetInnerHTML={{ __html: elem.data.content }}>


</div>
</div>
 </div>

</div>


     
))  } 
</div>

    
    )
}




{/* <div className=" flex items-center ">
  <div className=" mr-2">listen to Article </div>
  <div><audio controls className="mx-auto my-4">
  <source src="audio-file.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio></div>
</div> */}