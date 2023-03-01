import React from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from "react-redux";
import { addArticleData } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Articleform(){
  const [articleData, setArticleData] = React.useState({title:"", content:"", image:""});


  const dispatch=useDispatch();



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setArticleData(prevState => ({
      ...prevState,
      content: editor.getHTML()
    }));
  };

  const uploadImage = (e) => {
    let name,file
    		file= e.target.files[0];
    		name=e.target.name;
    
    		setArticleData({...articleData,[name]:URL.createObjectURL(file)})
    	}


      const onFormSubmit=(e)=>{
        e.preventDefault()
        dispatch(addArticleData(articleData))
         }
     
  return (
    <form>
      <div className="mb-4">
      <Link  to="/articles">View articles</Link>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          name="title"
          placeholder="Enter title here"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <ReactQuill
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          onChange={handleQuillChange}
        />
      </div>
      <div className="md:col-span-5">
        <label className="block w-56">
          <span className="mb-1">Upload cover image</span><br/>
        </label>
        <input className="btn" name="image" onChange={uploadImage} type="file" accept="image/png, image/gif, image/jpeg"></input>
      </div>
      <img src={articleData.image}/>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={onFormSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}











// import React from "react"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function Articleform(){
//   const [articleData,setArticleData]=React.useState({title:"",content:"",image:""})
// 	let name, value,file,type;

//   const uploadImage = (e) => {
// 		file= e.target.files[0];
// 		name=e.target.name;

// 		setArticleData({...articleData,[name]:URL.createObjectURL(file)})
// 	}
    
//     return (
//         <form >
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//             Title
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="title"
//             type="text"
//             placeholder="Enter title here"
           
//           />
//         </div>
//         <div className="mb-8">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
//             Content
//           </label>
//           <ReactQuill
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
           
//           />
//         </div>
//         <div className="md:col-span-5">

//   <label className="block w-56">
//             <span className="mb-1">Upload cover image</span><br/>
//         </label>
//       <input className="btn" name="image"  onChange={uploadImage} type="file" accept="image/png, image/gif, image/jpeg"></input>
// </div>

// <img src={articleData.image}/>
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     )
// }